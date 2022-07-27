import Link from "next/link";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import React, { useState } from "react";

const component = () => {
  const formateJson = () => {
    try {
      const formatedJSON = JSON.stringify(JSON.parse(value.toString()), null, 3);
      return (
        <div className="relative pt-1 flex flex-row">
          <textarea
            id="message"
            rows={15}
            className="block m-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Text Here ..."
            value={formatedJSON}
          ></textarea>
        </div>
      );
    } catch (err) {
      console.log(err);
      return;
      //  throw new Error()
    }
  };

  const [value, setValue] = useState("{'hello': 'world'}");

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
            JSON prettify and format
          </h3>
          <p className="mb-3 text-l font-normal text-blue-700 dark:text-gray-400">
            Prettify your JSON string to a human friendly readable format.
          </p>
          <hr className="mt-3 mb-3  border border-blue-800" />

          <div className="relative pt-1 flex flex-row">
            <textarea
              id="message"
              rows={15}
              className="block m-3 p-2.5 w-3/5 text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Text Here ..."
              onChange={(evt) => setValue(((evt.target.value).toString()))}
            >
              {/* {value} */}
            </textarea>
            <div className="w-3/5 m3">{formateJson()}</div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default component;
