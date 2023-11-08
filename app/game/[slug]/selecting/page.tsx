import { getCardsFromDecks } from "@/app/lib/cah";
import Card from "@/app/ui/card";

export default async function Page() {
  const cards = await getCardsFromDecks(["CAH Base Set"], "white");
  const indizi = new Set<number>();
  while (indizi.size < 16) {
    indizi.add(Math.floor(Math.random() * cards.length));
  }
  return [...indizi].map((idx, i) => (
    <Card
      key={idx}
      style={{
        aspectRatio: "1",
        fontSize: "4dvmin",
        scrollSnapAlign: "center",
        background: "#ECECEC",
        overflowWrap: "anywhere",
      }}
      text={cards[idx].text}
    />
  ));
}
