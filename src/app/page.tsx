import Link from 'next/link';

import { RouteMap } from '@/utils/routes';

const Home = () => {
  return (
    <main className="flex flex-col gap-6 items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-semibold text-neutral-500">
        Framer Designs
      </h1>
      <ul className="flex flex-col gap-2 min-w-[300px] text-lg">
        {RouteMap.map((route) => {
          return (
            <li key={route.name}>
              <Link href={route.href}>{route.name}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
