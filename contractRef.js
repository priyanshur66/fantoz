export const contractAddress = "0x3c157383Bf6dd7d403019AEb8CAeD3257fc7EeEf";
export const contractAbi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "clubId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "clubUserAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "officialClubName",
                "type": "string"
            }
        ],
        "name": "ClubRegistered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "dropId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "listingClub",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "dropName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "DropListed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "fanId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "fanUserAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "fullName",
                "type": "string"
            }
        ],
        "name": "FanRegistered",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_orderId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_trackingLink",
                "type": "string"
            }
        ],
        "name": "fulfillOrder",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "sent",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "required",
                "type": "uint256"
            }
        ],
        "name": "InsufficientPayment",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_dropName",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_minimumFanTokenRequired",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_totalItemQuantity",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_itemsLeft",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_dropStartDate",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_dropItemImage",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
            }
        ],
        "name": "listDrop",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "trackingLink",
                "type": "string"
            }
        ],
        "name": "OrderFulfilled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "dropId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "seller",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "OrderPlaced",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "PaymentSent",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_dropId",
                "type": "uint256"
            }
        ],
        "name": "placeOrder",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_officialClubName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_officialInstagramHandle",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_officialTwitterHandle",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_officialAnnouncementChannel",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_officialFanTokenChannel",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_kayenPoolLink",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_fanTokenContractAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_clubUserProfileImage",
                "type": "string"
            }
        ],
        "name": "registerNewClub",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_fullName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_fanInstagramHandle",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_fanTwitterHandle",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_deliveryAddress",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_fanUserBio",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_fanUserProfileImage",
                "type": "string"
            }
        ],
        "name": "registerNewFan",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "clubIdToClub",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "clubId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "clubUserAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "officialClubName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "officialInstagramHandle",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "officialTwitterHandle",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "officialAnnouncementChannel",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "officialFanTokenChannel",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "kayenPoolLink",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "fanTokenContractAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "clubUserProfileImage",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "clubUserAddressToClubId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "dropIdToDrop",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "dropId",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "listingClub",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "dropName",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "minimumFanTokenRequired",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalItemQuantity",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "itemsLeft",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "dropStartDate",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "dropItemImage",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "fanIdToFan",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "fanId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "fanUserAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "fullName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "fanInstagramHandle",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "fanTwitterHandle",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "deliveryAddress",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "fanUserBio",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "fanUserProfileImage",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "fanUserAddressToFanId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllDrops",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "dropId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address payable",
                        "name": "listingClub",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "dropName",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "minimumFanTokenRequired",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalItemQuantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "itemsLeft",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "dropStartDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "dropItemImage",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Fantoz.Drop[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllOrders",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "orderId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "dropId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "listingClubAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "fanUserAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "officialClubName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "fanFullName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "fanDeliveryAddress",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "trackingLink",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "orderFullfilled",
                        "type": "bool"
                    }
                ],
                "internalType": "struct Fantoz.Order[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_clubId",
                "type": "uint256"
            }
        ],
        "name": "getClub",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "clubId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "clubUserAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "officialClubName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "officialInstagramHandle",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "officialTwitterHandle",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "officialAnnouncementChannel",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "officialFanTokenChannel",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "kayenPoolLink",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "fanTokenContractAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "clubUserProfileImage",
                        "type": "string"
                    }
                ],
                "internalType": "struct Fantoz.Club",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_dropId",
                "type": "uint256"
            }
        ],
        "name": "getDrop",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "dropId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address payable",
                        "name": "listingClub",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "dropName",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "minimumFanTokenRequired",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalItemQuantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "itemsLeft",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "dropStartDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "dropItemImage",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Fantoz.Drop",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_fanId",
                "type": "uint256"
            }
        ],
        "name": "getFan",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "fanId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "fanUserAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "fullName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "fanInstagramHandle",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "fanTwitterHandle",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "deliveryAddress",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "fanUserBio",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "fanUserProfileImage",
                        "type": "string"
                    }
                ],
                "internalType": "struct Fantoz.Fan",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_clubUserAddress",
                "type": "address"
            }
        ],
        "name": "getFanTokenContractAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_orderId",
                "type": "uint256"
            }
        ],
        "name": "getOrder",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "orderId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "dropId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "listingClubAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "fanUserAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "officialClubName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "fanFullName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "fanDeliveryAddress",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "trackingLink",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "orderFullfilled",
                        "type": "bool"
                    }
                ],
                "internalType": "struct Fantoz.Order",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "orderIdToOrder",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "orderId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "dropId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "listingClubAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "fanUserAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "officialClubName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "fanFullName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "fanDeliveryAddress",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "trackingLink",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "orderFullfilled",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
export const fanTokenAbi = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
]