import Link from "next/link";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import React, { useState } from "react";
// import { ClipboardCopyIcon } from "@heroicons/react/solid";
const tokenGeneratorComponent = () => {
  const generateCypherText = (item: {base : number, text: string}) => {
    return (
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-1 left-1 pl-1 pr-10  flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">{item.text} </span>
        </div>
        <input
          type="text"
          name={item.text}
          id={item.text}
          defaultValue='0'
          onChange={(evt) => setValue(parseInt(evt.target.value.toString()) | 0)}
          value={value.toString(item.base)}
          className="focus:ring-indigo-500 focus:border-blue-500 block w-full pl-20 sm:text-sm border-gray-300 rounded-md
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    );
  };

  const [value, setValue] = useState(10);

  const numberBase = [
    { base: 10, text: "Decimal" },
    { base: 8, text: "Octal" },
    { base: 16, text: "Hex" },
    { base: 2, text: "Binary" },
  ];
  return (
    <Main meta={<Meta title="Hash Text" description="Hash Text" />}>
      <h3>
        <Link href="/"> &lt; Back </Link>
      </h3>
      <div className="flex justify-center">
        <div
          className=" min-w-5xl max-w-5xl rounded-lg  border border-gray-200 bg-white  p-6 
                    shadow-lg  break-all hover:bg-gray-100  hover:shadow-blue-900/50 
                    dark:border-gray-700 dark:bg-gray-800"
        >
          <h3 className=" text-3xl font-bold tracking-tight text-blue-600 dark:text-white">
            Hash Text
          </h3>
          <hr className="mt-3 mb-3  border border-blue-800" />
          <p className="mb-3 text-l font-normal text-blue-700 dark:text-gray-400">
            Convert number between different bases (decimal, hexadecimal,
            binary, octal)
          </p>

          <div className="relative pt-1">
            <div>{numberBase.map((item) => generateCypherText(item))}</div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default tokenGeneratorComponent;
