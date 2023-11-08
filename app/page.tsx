import Link from "next/link";

export default function Home() {
  //console.log(await listPackages());
  return (
    <main className="grid grid-cols-[auto] justify-center items-center h-[100dvh] w-[100dvw] border border-black border-solid p-[2.5dvmin] gap-[2.5dvmin] bg-gray-300">
        <Link href="/game/createGame" className="border border-green-800 p-4 bg-green-700 hover:bg-green-500 text-white text-2xl">Create Game</Link>
        <Link href="/game/joinGame" className="border border-blue-800 p-4 bg-blue-700 hover:bg-blue-500 text-white text-2xl">Join Game</Link>
    </main>
  );
}
