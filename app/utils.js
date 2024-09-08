"use client";
import axios from "axios"
import { ethers, parseEther, parseUnits } from "ethers";
import { contractAddress, contractAbi, fanTokenAbi } from "../contractRef"
export let signer = null;

export let provider;
export async function connectWithMetamask() {
    console.log("calling connect with metamask")
    if (window.ethereum == null) {
        console.log("MetaMask not installed; using read-only defaults");
        provider = ethers.getDefaultProvider();
        console.log(provider);
    } else {
        provider = await new ethers.BrowserProvider(window.ethereum);
        console.log(provider);

        signer = await provider.getSigner();
        console.log(signer);
        return await provider.send("eth_requestAccounts", [0]);
    }
}
connectWithMetamask();

export async function getClubID() {
    await connectWithMetamask();
    // console.log(signer.address);
    const abi = contractAbi;
    const address = contractAddress;
    console.log(address);
    // console.log(abi);
    // console.log(provider);
    const contract = new ethers.Contract(address, abi, provider);
    const tx = await contract.clubUserAddressToClubId(signer.address);
    //await tx.wait();
    //console.log(tx.toString());
    return Number(tx.toString());
}

export async function getFanID() {
    await connectWithMetamask();
    // console.log(signer.address);
    const abi = contractAbi;
    const address = contractAddress;
    console.log(address);
    // console.log(abi);
    // console.log(provider);
    const contract = new ethers.Contract(address, abi, provider);
    const tx = await contract.fanUserAddressToFanId(signer.address);
    //await tx.wait();
    //console.log(tx.toString());
    return Number(tx.toString());
}

// export async function getAllOrders() {
//     await connectWithMetamask();
//     // console.log(signer.address);
//     const abi = contractAbi;
//     const address = contractAddress;
//     console.log(address);
//     // console.log(abi);
//     // console.log(provider);
//     const contract = new ethers.Contract(address, abi, provider);
//     const tx = await contract.getAllOrders();
//     //await tx.wait();
//     //console.log(tx.toString());
//     return tx;
// }

export async function getAllDrops() {
    await connectWithMetamask();
    // console.log(signer.address);
    const abi = contractAbi;
    const address = contractAddress;
    console.log(address);
    // console.log(abi);
    // console.log(provider);
    const contract = new ethers.Contract(address, abi, provider);
    const tx = await contract.getAllDrops();
    //await tx.wait();
    //console.log(tx.toString());
    return tx;
}

export async function getAllOrders() {
    try {

        await connectWithMetamask();


        const signerAddress = await signer.address;
        console.log("Signer address:", signerAddress);

        const contract = new ethers.Contract(contractAddress, contractAbi, signer);


        const orders = await contract.getAllOrders();
        console.log("Raw orders data:", orders);

        // const parsedOrders = orders.map(order => ({
        //     orderId: order.orderId.toNumber(),
        //     dropId: order.dropId.toNumber(),
        //     listingClubAddress: order.listingClubAddress,
        //     fanUserAddress: order.fanUserAddress,
        //     officialClubName: order.officialClubName,
        //     fanFullName: order.fanFullName,
        //     fanDeliveryAddress: order.fanDeliveryAddress,
        //     trackingLink: order.trackingLink,
        //     orderFullfilled: order.orderFullfilled
        // }));

        return orders;
    } catch (error) {
        console.error("Error in getAllOrders:", error);
        throw error;
    }

}

export async function checkDropEligiblity(clubUserAddress) {
    await connectWithMetamask();
    // console.log(signer.address);
    const abi = fanTokenAbi;
    const address = await getFanTokenContractAddress(clubUserAddress);
    console.log("fan token contract add", address);
    // console.log(abi);
    // console.log(provider);
    const contract = new ethers.Contract(address, abi, provider);
    const tx = await contract.balanceOf(signer.address);
    //await tx.wait();
    //console.log(tx.toString());
    return Number(String(tx));

}

export async function getFanTokenContractAddress(clubUserAddress) {
    await connectWithMetamask();
    // console.log(signer.address);
    const abi = contractAbi;
    const address = contractAddress;
    console.log(address);
    // console.log(abi);
    // console.log(provider);
    const contract = new ethers.Contract(address, abi, provider);
    const tx = await contract.getFanTokenContractAddress(clubUserAddress);
    //await tx.wait();
    //console.log(tx.toString());
    return String(tx);

}


export async function getKayenPoolLink(clubUserAddress) {
    await connectWithMetamask();
    // console.log(signer.address);
    const abi = contractAbi;
    const address = contractAddress;
    console.log(address);
    // console.log(abi);
    // console.log(provider);
    const contract = new ethers.Contract(address, abi, provider);
    const tx = await contract.getKayenPoolLink(clubUserAddress);
    //await tx.wait();
    //console.log(tx.toString());
    return String(tx);

}

// writing contracts

export async function registerNewClubUser(
    officialClubName,
    officialInstagramHandle,
    officialTwitterHandle,
    officialAnnouncementChannel,
    officialFanTokenChannel,
    kayenPoolLink,
    fanTokenContractAddress,
    clubUserProfileImage
) {
    const abi = contractAbi;
    const address = contractAddress;
    const contract = new ethers.Contract(address, abi, signer);
    const tx = await contract.registerNewClub(
        officialClubName,
        officialInstagramHandle,
        officialTwitterHandle,
        officialAnnouncementChannel,
        officialFanTokenChannel,
        kayenPoolLink,
        fanTokenContractAddress,
        clubUserProfileImage
    );
    console.log("club creation status", tx);
    return tx
}

export async function registerNewFan(
    fullName,
    fanInstagramHandle,
    fanTwitterHandle,
    deliveryAddress,
    fanUserBio,
    fanUserProfileImage
) {
    const abi = contractAbi;
    const address = contractAddress;
    const contract = new ethers.Contract(address, abi, signer);
    const tx = await contract.registerNewFan(
        fullName,
        fanInstagramHandle,
        fanTwitterHandle,
        deliveryAddress,
        fanUserBio,
        fanUserProfileImage
    );
    console.log("fan creation status", tx);
    return tx
}

export async function listDrop(
    dropName,
    minimumFanTokenRequired,
    totalItemQuantity,
    itemsLeft,
    dropStartDate,
    dropItemImage,
    price
) {
    const abi = contractAbi;
    const address = contractAddress;
    const contract = new ethers.Contract(address, abi, signer);
    const parsedPrice = parseEther(String(price))
    const tx = await contract.listDrop(
        dropName,
        minimumFanTokenRequired,
        totalItemQuantity,
        itemsLeft,
        dropStartDate,
        dropItemImage,
        parsedPrice
    );
    console.log("drop creation status", tx);
    return tx
}

export async function placeOrder(
    dropId, price
) {
    const abi = contractAbi;
    const address = contractAddress;
    const contract = new ethers.Contract(address, abi, signer);
    const tx = await contract.placeOrder(
        dropId, {
        value: price,
    }
    );
    console.log("order placing status status", tx);
    return tx
}

export async function fulfillOrder(
    orderId, trackingLink
) {
    const abi = contractAbi;
    const address = contractAddress;
    const contract = new ethers.Contract(address, abi, signer);
    const tx = await contract.fulfillOrder(
        orderId, trackingLink)
    console.log("order placing status status", tx);
    return tx
}

// pinata 

export const uploadToIPFS = async (file) => {
    if (file) {
        try {

            const formData = new FormData();
            formData.append("file", file);

            const response = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                data: formData,
                maxBodyLength: "Infinity",
                headers: {
                    pinata_api_key: process.env.NEXT_PUBLIC_PINATA_AIP_KEY,
                    pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRECT_KEY,
                    "Content-Type": "multipart/form-data",
                },
            });

            const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

            return url

        } catch (error) {
            console.log("error uploading to pinata")
        }
    }
};
