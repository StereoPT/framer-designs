import Link from 'next/link';

const Home = () => {
  return (
    <main className="flex flex-col gap-6 items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-semibold text-neutral-500">
        Framer Designs
      </h1>
      <ul className="flex flex-col gap-2 min-w-[300px] text-lg">
        <li>
          <Link href="foldable-map">Foldable Map</Link>
        </li>
        <li>
          <Link href="foldable-map">Recursive Component</Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
