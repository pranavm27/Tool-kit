import Link from "next/link";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import React, { useState } from "react";

var CryptoJS = require("crypto-js");


const component = () => {
  const converToBase64 = () => {
    var base64 =  CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(value))

    return (
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-1 left-1 pl-1 pr-10  flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm"> base64 </span>
        </div>
        <textarea
          name="base64"
          id="base64"
          rows = {5}
          value={base64}
          className="focus:ring-indigo-500 focus:border-blue-500 block w-full pl-20 sm:text-sm border-gray-300 rounded-md
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="base64 string"
        />
      </div>
    );
  };

  const converFromBase64 = () => {
    var plainText = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(encodedValue));

    console.log(encodedValue)
    return (
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-1 left-1 pl-1 pr-10  flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm"> Plain Text  </span>
        </div>
        <textarea
          name="text"
          id="text"
          rows={5}
          value={plainText}
          className="focus:ring-indigo-500 focus:border-blue-500 block w-full pl-20 sm:text-sm border-gray-300 rounded-md
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="base64 string"
        />
      </div>
    );
  };

  const [value, setValue] = useState(
    "plain text"
  );

  const [encodedValue, setEncodedValue] = useState(
    "cGxhaW4gdGV4dA=="
  )

  return (
    <Main meta={<Meta title="Hash Text" description="Hash Text" />}>
      <h3>
        <Link href="/"> &lt; Back </Link>
      </h3>
      <div className="flex justify-center ">
        <div
          className=" w-full ml-10 mr-24  rounded-lg  border border-gray-200 bg-white  p-6 
                    shadow-lg  break-all hover:bg-gray-100  hover:shadow-blue-900/50 
                    dark:border-gray-700 dark:bg-gray-800"
        >
          <h3 className=" text-3xl font-bold tracking-tight text-blue-600 dark:text-white">
            Base 64 Converter
          </h3>
          <p className="mb-3 text-l font-normal text-blue-700 dark:text-gray-400">
            Simply encode and decode string into a their base64 representation.
          </p>
          <hr className="mt-3 mb-3  border border-blue-800" />
         
          <p className="mb-3 text-l font-normal text-blue-700 dark:text-gray-400">
          String to Base64

          </p>
          <div className="relative pt-1 flex flex-row">
            <textarea
              id="message"
              rows={5}
              className="block m-3 p-2.5 w-3/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Text Here ..."
              onChange={(evt) => setValue(evt.target.value)}
            >
              {value}
            </textarea>
            <div className="w-3/5 m3" >{ converToBase64()}</div>
          </div>
          <hr className="mt-2 mb-2  border border-blue-600" />
          <p className="mb-3 text-l font-normal text-blue-700 dark:text-gray-400">
           Base64 to String

          </p>
          <div className="  relative pt-1 flex flex-row ">
            <textarea
              id="message"
              rows={5}
              className="block m-3 p-2.5 w-3/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Text Here ..."
              onChange={(evt) => setEncodedValue(evt.target.value)}
            >
              {value}
            </textarea>
            <div className="w-3/5 m3">{ converFromBase64()}</div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default component;
