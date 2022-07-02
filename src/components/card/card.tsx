import Link from 'next/link';

interface CardInterface {
  title: string;
  desc: string;
  anchor: string;
}

function Card({ title, desc, anchor }: CardInterface) {
  return (
    <>
      <Link href={anchor} passHref>
        <div
          className="m-2 
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
          <h5 className="mb-2 text-lg font-bold tracking-tight text-blue-800 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {desc}
          </p>
        </div>
      </Link>
    </>
  );
}

export default Card;
