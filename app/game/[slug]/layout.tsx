import { hasGame, getCardsFromDecks, getGame, getDev } from "@/app/lib/cah"
import Card from "@/app/ui/card"
import { RedirectType, redirect } from 'next/navigation'

export default async function GameLayout({children, params}: {
    children: React.ReactNode,
    params: {slug: string}
}) {
    if(!(await hasGame(params.slug))) {
      redirect("/", RedirectType.replace);
    }
    const game = await getGame(params.slug);
    console.log(game);
    const cards = await getCardsFromDecks(game.decks, "black");  
    const card = cards[Math.floor(cards.length * Math.random())];
    
    return <main className="grid grid-cols-[1fr,2fr] grid-rows-2 h-[100dvh] w-[100dvw] border border-black border-solid p-[2.5dvmin] gap-[2.5dvmin] bg-gray-300">
    <Card text={card.text} className="bg-zinc-900 text-white text-2xl row-span-full" />
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr",
        gridAutoFlow: "column",
        gridAutoColumns: "minmax(calc(33% - 1.66dvmin ), 1fr)",
        gap: "3dvmin",
        height: "100%",
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        scrollSnapAlign: "center",
        scrollBehavior: "smooth",
        gridRow: "2 / -2",
        alignItems: "center",
      }}
    >
      {children}
    </div>
</main>
}