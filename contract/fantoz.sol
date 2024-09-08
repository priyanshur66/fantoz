// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Fantoz {
    struct Club {
        uint256 clubId;
        address clubUserAddress;
        string officialClubName;
        string officialInstagramHandle;
        string officialTwitterHandle;
        string officialAnnouncementChannel;
        string officialFanTokenChannel;
        string kayenPoolLink;
        address fanTokenContractAddress;
        string clubUserProfileImage;
    }

    struct Fan {
        uint256 fanId;
        address fanUserAddress;
        string fullName;
        string fanInstagramHandle;
        string fanTwitterHandle;
        string deliveryAddress;
        string fanUserBio;
        string fanUserProfileImage;
    }

    struct Drop {
        uint256 dropId;
        address payable listingClub;
        string dropName;
        uint256 minimumFanTokenRequired;
        uint256 totalItemQuantity;
        uint256 itemsLeft;
        uint256 dropStartDate;
        string dropItemImage;
        uint256 price;
    }

    struct Order {
        uint256 orderId;
        uint256 dropId;
        address listingClubAddress;
        address fanUserAddress;
        string officialClubName;
        string fanFullName;
        string fanDeliveryAddress;
        string trackingLink;
        bool orderFullfilled;
    }

    uint256 clubId = 0;
    uint256 fanId = 0;
    uint256 dropId = 0;
    uint256 orderId = 0;

    mapping(uint256 => Club) public clubIdToClub;
    mapping(uint256 => Fan) public fanIdToFan;
    mapping(uint256 => Drop) public dropIdToDrop;
    mapping(uint256 => Order) public orderIdToOrder;
    mapping(address => uint256) public fanUserAddressToFanId;
    mapping(address => uint256) public clubUserAddressToClubId;

    // Events
    event ClubRegistered(uint256 clubId, address clubUserAddress, string officialClubName);
    event FanRegistered(uint256 fanId, address fanUserAddress, string fullName);
    event DropListed(uint256 dropId, address listingClub, string dropName, uint256 price);
    event OrderPlaced(uint256 orderId, uint256 dropId, address buyer, address seller, uint256 price);
    event PaymentSent(address from, address to, uint256 amount);
    event InsufficientPayment(address buyer, uint256 sent, uint256 required);
    event OrderFulfilled(uint256 orderId, string trackingLink);

    function registerNewClub(
        string memory _officialClubName,
        string memory _officialInstagramHandle,
        string memory _officialTwitterHandle,
        string memory _officialAnnouncementChannel,
        string memory _officialFanTokenChannel,
        string memory _kayenPoolLink,
        address _fanTokenContractAddress,
        string memory _clubUserProfileImage
    ) public returns (bool) {
        clubId++;
        clubIdToClub[clubId] = Club({
            clubId: clubId,
            clubUserAddress: msg.sender,
            officialClubName: _officialClubName,
            officialInstagramHandle: _officialInstagramHandle,
            officialTwitterHandle: _officialTwitterHandle,
            officialAnnouncementChannel: _officialAnnouncementChannel,
            officialFanTokenChannel: _officialFanTokenChannel,
            kayenPoolLink: _kayenPoolLink,
            fanTokenContractAddress: _fanTokenContractAddress,
            clubUserProfileImage: _clubUserProfileImage
        });
        clubUserAddressToClubId[msg.sender] = clubId;
        emit ClubRegistered(clubId, msg.sender, _officialClubName);
        return true;
    }

    function registerNewFan(
        string memory _fullName,
        string memory _fanInstagramHandle,
        string memory _fanTwitterHandle,
        string memory _deliveryAddress,
        string memory _fanUserBio,
        string memory _fanUserProfileImage
    ) public returns (bool) {
        fanId++;
        fanIdToFan[fanId] = Fan({
            fanId: fanId,
            fanUserAddress: msg.sender,
            fullName: _fullName,
            fanInstagramHandle: _fanInstagramHandle,
            fanTwitterHandle: _fanTwitterHandle,
            deliveryAddress: _deliveryAddress,
            fanUserBio: _fanUserBio,
            fanUserProfileImage: _fanUserProfileImage
        });
        fanUserAddressToFanId[msg.sender] = fanId;
        emit FanRegistered(fanId, msg.sender, _fullName);
        return true;
    }

    function listDrop(
        string memory _dropName,
        uint256 _minimumFanTokenRequired,
        uint256 _totalItemQuantity,
        uint256 _itemsLeft,
        uint256 _dropStartDate,
        string memory _dropItemImage,
        uint256 _price
    ) public returns (bool) {
        require(clubUserAddressToClubId[msg.sender] != 0, "Only registered clubs can list drops");
        dropId++;
        dropIdToDrop[dropId] = Drop({
            dropId: dropId,
            listingClub: payable(msg.sender),
            dropName: _dropName,
            minimumFanTokenRequired: _minimumFanTokenRequired,
            totalItemQuantity: _totalItemQuantity,
            itemsLeft: _itemsLeft,
            dropStartDate: _dropStartDate,
            dropItemImage: _dropItemImage,
            price: _price
        });
        emit DropListed(dropId, msg.sender, _dropName, _price);
        return true;
    }

    function placeOrder(uint256 _dropId) public payable {
        require(fanUserAddressToFanId[msg.sender] != 0, "Only registered fans can place orders");
        require(block.timestamp >= dropIdToDrop[_dropId].dropStartDate, "Drop has not started yet");
        
        orderId++;
        Drop storage drop = dropIdToDrop[_dropId];
        require(drop.itemsLeft > 0, "No items left in this drop");
        
        address payable listingClubAdd = payable(drop.listingClub);
        
        emit OrderPlaced(orderId, _dropId, msg.sender, listingClubAdd, drop.price);

        if (msg.value < drop.price) {
            emit InsufficientPayment(msg.sender, msg.value, drop.price);
            revert("Insufficient price sent");
        }

        orderIdToOrder[orderId] = Order({
            orderId: orderId,
            dropId: _dropId,
            listingClubAddress: listingClubAdd,
            fanUserAddress: msg.sender,
            officialClubName: clubIdToClub[clubUserAddressToClubId[listingClubAdd]].officialClubName,
            fanFullName: fanIdToFan[fanUserAddressToFanId[msg.sender]].fullName,
            fanDeliveryAddress: fanIdToFan[fanUserAddressToFanId[msg.sender]].deliveryAddress,
            trackingLink: "",
            orderFullfilled: false
        });

        listingClubAdd.transfer(drop.price);
        emit PaymentSent(msg.sender, listingClubAdd, drop.price);

        drop.itemsLeft--;
    }

    function fulfillOrder(uint256 _orderId, string memory _trackingLink) public returns (bool) {
        Order storage order = orderIdToOrder[_orderId];
        require(msg.sender == order.listingClubAddress, "Only the listing club can fulfill the order");
        require(!order.orderFullfilled, "Order already fulfilled");
        
        order.trackingLink = _trackingLink;
        order.orderFullfilled = true;
        
        emit OrderFulfilled(_orderId, _trackingLink);
        return true;
    }

    // Utility functions
    function getClub(uint256 _clubId) public view returns (Club memory) {
        return clubIdToClub[_clubId];
    }

    function getFan(uint256 _fanId) public view returns (Fan memory) {
        return fanIdToFan[_fanId];
    }

    function getDrop(uint256 _dropId) public view returns (Drop memory) {
        return dropIdToDrop[_dropId];
    }

    function getOrder(uint256 _orderId) public view returns (Order memory) {
        return orderIdToOrder[_orderId];
    }


    function getAllDrops() public view returns (Drop[] memory) {
        Drop[] memory allDrops = new Drop[](dropId);
        for (uint256 i = 1; i <= dropId; i++) {
            allDrops[i - 1] = dropIdToDrop[i];
        }
        return allDrops;
    }

     function getAllOrders() public view returns (Order[] memory) {
        uint256 relevantOrderCount = 0;
        
        // First, count the number of relevant orders
        for (uint256 i = 1; i <= orderId; i++) {
            if (orderIdToOrder[i].listingClubAddress == msg.sender || 
                orderIdToOrder[i].fanUserAddress == msg.sender) {
                relevantOrderCount++;
            }
        }
        
     
        Order[] memory relevantOrders = new Order[](relevantOrderCount);
        
        // Fill the array with relevant orders
        uint256 currentIndex = 0;
        for (uint256 i = 1; i <= orderId; i++) {
            if (orderIdToOrder[i].listingClubAddress == msg.sender || 
                orderIdToOrder[i].fanUserAddress == msg.sender) {
                relevantOrders[currentIndex] = orderIdToOrder[i];
                currentIndex++;
            }
        }
        
        return relevantOrders;
    }
}