"use client";
import { ethers, parseEther, parseUnits } from "ethers";
import { contractAddress, contractAbi } from "../contractRef"
let signer = null;

let provider;
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
    return tx.toString();
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
    return tx.toString();
}