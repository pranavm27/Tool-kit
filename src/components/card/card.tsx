import Link from 'next/link';
import { HashtagIcon } from '@heroicons/react/solid'
import { VariableIcon } from '@heroicons/react/solid'
import { ShieldExclamationIcon} from '@heroicons/react/outline'

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
          className="
                m-0
                rounded-lg 
                border
                border-gray-200
                bg-white 
                p-6 
                shadow-md
                hover:bg-gray-100 
                hover:shadow-blue-900/50
                dark:border-gray-700 dark:bg-gray-800"
            >

          {anchor=== 'tokenGenerator' && <VariableIcon className="h-9 w-9 text-blue-500"/>}
          {anchor=== 'hashText' && <HashtagIcon className="h-9 w-9 text-blue-500"/>}
          {anchor === 'uuidGenerator' && <ShieldExclamationIcon className="h-9 w-9 text-blue-500" />}

          <h5 className="mb-2 text-lg font-bold tracking-tight text-blue-600 dark:text-white">
            {title}
          </h5>
          <p className="mt-3 font-normal text-gray-700 dark:text-gray-400">
            {desc}
          </p>
        </div>
      </Link>
    </>
  );
}

export default Card;
