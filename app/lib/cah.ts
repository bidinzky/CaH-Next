"use server"

import {promises as fs} from "fs";
import CAH from "./cah-cards-full.json";
const path = process.cwd() + "/data.json";

export const listPackages = async () => {
    return CAH.map(l => l.name);
}

export const getCardsFromDecks = async (decks: string[], type: "black"|"white") => {
    return CAH.filter(d => decks.includes(d.name)).flatMap(d => d[type]);
}

const createOrGetDb = async () => {
    
    try {
        await fs.access(path, fs.constants.F_OK);
    }catch(_) {
        await fs.writeFile(path, JSON.stringify({}), "utf-8");
    }
    const data = JSON.parse(await fs.readFile(path, "utf-8")) as Record<string, {
        decks: string[]
    }>;
    return data;
}

export const createGame = async (id: string, decks: string[]) => {
    const data = await createOrGetDb();
    data[id] = {
        decks
    };
    await fs.writeFile(path, JSON.stringify(data), "utf-8");
}

export const hasGame = async (id: string) => {
    const data = await createOrGetDb();
    const i = id in data;   
    return i;
}

export const getGame = async (id: string) => {
    const data = await createOrGetDb();
    return data[id];
}

export const getDev = async () => {
    return await createOrGetDb();
}