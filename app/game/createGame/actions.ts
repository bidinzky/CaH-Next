"use server";
import { createGame as cG, listPackages } from "@/app/lib/cah";
import { randomUUID } from "crypto";
import { redirect } from "next/navigation";

export async function createGame(formData: FormData) {
  const id = randomUUID();
  const name = formData.get("name");
  const decks = formData.getAll("decks") as string[];
  console.log(name, decks, id);
  // TODO game logic
  cG(id, decks);

  redirect(`/game/${id}/selecting`);
}

export async function getDecks() {
  const decks = (await listPackages()).map((d) => ({
    value: d,
    label: d,
  }));
  return decks;
}
