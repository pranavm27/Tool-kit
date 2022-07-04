import Link from "next/link";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import React from "react";
import uuid from "react-uuid";
import uuidv4 from "uuid/v4";

// import { ClipboardCopyIcon } from "@heroicons/react/solid";

const tokenGeneratorComponent = () => {
  return (
    <Main meta={<Meta title="Hash Text" description="Hash Text" />}>
      <h3>
        <Link href="/"> &lt; Back </Link>
      </h3>
      <div className="flex justify-center">
        <div
          className=" max-w-5xl rounded-lg  border border-gray-200 bg-white  p-6 
                    shadow-lg  break-all hover:bg-gray-100  hover:shadow-blue-900/50 
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
            <div>{ uuidv4() }</div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default tokenGeneratorComponent;
