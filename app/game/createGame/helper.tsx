"use client"
import React from "react";
import { getDecks, createGame } from "./actions"
import Select from "react-select"

export const Inner = ({decks}: {decks: Awaited<ReturnType<typeof getDecks>>}) => {
    return (
      <main className="flex justify-center items-center h-[100dvh] w-[100dvw] border border-black border-solid p-[2.5dvmin] gap-[2.5dvmin] bg-gray-300">
        <form action={createGame} className="grid grid-cols-[auto,auto] gap-[2.5dvmin] max-w-[80vw] justify-center items-center shadow-md border border-black bg-neutral-400 rounded-xl p-[3.5dvmin]">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" />
          <label htmlFor="decks">Decks: </label>
          <Select isMulti name="decks" options={decks} />
  
          <input className="border border-black rounded p-2 bg-blue-400 hover:bg-blue-600" type="submit" value={"Submit"} />
        </form>
      </main>
    );
  }