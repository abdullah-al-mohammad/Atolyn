import Image from 'next/image';
import { Destination } from './marketing/destination/page';
import { Comments } from './comments/page';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-w-2xl mx-auto items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Destination></Destination>
        <Comments></Comments>
      </main>
    </div>
  );
}
