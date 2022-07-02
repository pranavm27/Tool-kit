import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const tokenGeneratorComponent = () => (
  <Main meta={<Meta title="Token Generator" description="Token Generator" />}>
    <h3>
      <Link href="/"> &lt; Back </Link>
    </h3>

    <div className="flex justify-center">
      <div
        className="m-6
          max-w-sm
          rounded-lg 
          border
          border-gray-200
          bg-white 
          p-6 
          shadow-lg 
          hover:bg-gray-100 
          hover:shadow-blue-900/50
          dark:border-gray-700 dark:bg-gray-800"
      >
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Token Generator
        </h5>
        <hr className="border border-blue-800" />
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Generate Randum string
        </p>
      </div>
    </div>
  </Main>
);

export default About;
