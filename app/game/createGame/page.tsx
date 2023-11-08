"use server"

import { createGame, getDecks } from "./actions";
import { InferGetServerSidePropsType } from "next";
import { Inner } from "./helper";



export default async function Page() {
  const decks = await getDecks();
  return <Inner decks={decks} />
}
