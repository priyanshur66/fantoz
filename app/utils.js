"use client";
import { ethers, parseEther, parseUnits } from "ethers";
import { contractAddress, contractAbi } from "../contractRef"
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

export async function getAllOrders() {
    await connectWithMetamask();
    // console.log(signer.address);
    const abi = contractAbi;
    const address = contractAddress;
    console.log(address);
    // console.log(abi);
    // console.log(provider);
    const contract = new ethers.Contract(address, abi, provider);
    const tx = await contract.getAllOrders();
    //await tx.wait();
    //console.log(tx.toString());
    return tx;
}

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
    const tx = await contract.listDrop(
        dropName,
        minimumFanTokenRequired,
        totalItemQuantity,
        itemsLeft,
        dropStartDate,
        dropItemImage,
        price
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