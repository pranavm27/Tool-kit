import Link from "next/link";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

// import { ClipboardCopyIcon } from "@heroicons/react/solid";

const uuidGenerator = () => {
  const [uniqueId, setUniqueId] = useState("");
  const generetaUUID = () => {
    setUniqueId(uuid());
  };

  useEffect(() => {
    generetaUUID();
  }, [1]);
  return (
    <Main meta={<Meta title="Hash Text" description="Hash Text" />}>
      <h3>
        <Link href="/"> &lt; Back </Link>
      </h3>
      <div className="flex justify-center">
        <div
          className=" max-w-5xl rounded-lg  border border-gray-200 bg-white  p-6 
                    shadow-sm  break-all hover:bg-gray-100  hover:shadow-blue-900/50 
                    dark:border-gray-700 dark:bg-gray-800"
        >
          <h3 className=" text-3xl font-bold tracking-tight text-blue-600 dark:text-white">
            UUIDs v4 generator
          </h3>
          <hr className="mt-3 mb-3  border border-blue-800" />
          <p className="mb-3 text-l font-normal text-blue-700 dark:text-gray-400">
            A universally unique identifier (UUID) is a 128-bit number used to
            identify information in computer systems. The number of possible
            UUIDs is 16^32, which is 2^128 or about 3.4x10^38 (which is a lot
            !).
          </p>

          <div className="relative pt-1">
            <hr className="mt-3 mb-3 border border-blue-800" />

            <div>
              <text
                id="message"
                values={uniqueId}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {uniqueId}
              </text>
            </div>
            <div className="flex justify-center">
              <button
                className="m-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={generetaUUID}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default uuidGenerator;
