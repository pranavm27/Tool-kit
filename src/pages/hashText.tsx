import Link from "next/link";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import React, { useState } from "react";

var CryptoJS = require("crypto-js");

const hasText = () => {
  const generateCypherText = (cypher: any) => {
    return (
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-1 left-1 pl-1 pr-10  flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">{cypher} </span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          value={CryptoJS[cypher](value)}
          className="focus:ring-indigo-500 focus:border-blue-500 block w-full pl-20 sm:text-sm border-gray-300 rounded-md
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="0.00"
        />
        {/* <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            copy
          </label>
          <button
            id="currency"
            name="currency"
            className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
          >
            copy
          </button>
        </div> */}
      </div>
    );
  };

  const [value, setValue] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus metus blandit dolor lacus natoque ad fusce aliquam velit."
  );

  const hashAlgos = [
    "MD5",
    "SHA1",
    "SHA256",
    "SHA224",
    "SHA512",
    "SHA384",
    "SHA3",
    "RIPEMD160",
  ];
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
            Hash Text
          </h3>
          <hr className="mt-3 mb-3  border border-blue-800" />
          <p className="mb-3 text-l font-normal text-blue-700 dark:text-gray-400">
            Hash a text string using the function you need : MD5, SHA1, SHA256,
            SHA224, SHA512, SHA384, SHA3 or RIPEMD160
          </p>

          <div className="relative pt-1">
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Text Here ..."
              onChange={(evt) => setValue(evt.target.value)}
            >
              {value}
            </textarea>
            <hr className="mt-3 mb-3 border border-blue-800" />
            <div>{hashAlgos.map((item) => generateCypherText(item))}</div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default hasText;
