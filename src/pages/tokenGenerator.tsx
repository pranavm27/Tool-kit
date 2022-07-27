import Link from "next/link";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import React, { useEffect, useState } from "react";

const tokenGeneratorComponent = () => {
  const generateToken = () => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = ".,;:!?./-'#{([-|\\@)]=}*+\"";

    let chars = "";
    chars += lowerCaseFlag ? lowerCase : "";
    chars += upperCaseFlag ? uppercase : "";
    chars += numberFlag ? numbers : "";
    chars += symbolsFlag ? symbols : "";

    let str = "";
    for (let i = 0; i < value; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setToken (str);
  };


  async function copyTextToClipboard() {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(token);
    } else {
      return document.execCommand('copy', true, token);
    }
  }


  const [value, setValue] = useState(60);
  const [token, setToken] = useState("");
  const [upperCaseFlag, setUpperCaseFlag] = useState(true);
  const [lowerCaseFlag, setLowerCaseFlag] = useState(true);
  const [numberFlag, setNumberFlag] = useState(false);
  const [symbolsFlag, setSymbolsFlag] = useState(false);

  useEffect(() => {
    generateToken();
  }, [value, upperCaseFlag, lowerCaseFlag, numberFlag, symbolsFlag]);

  return (
    <Main meta={<Meta title="Token Generator" description="Token Generator" />}>
      <h3>
        <Link href="/"> &lt; Back </Link>
      </h3>
      <div className="flex justify-center">
        <div
          className=" max-w-5xl rounded-lg  border border-gray-200 bg-white  p-6 
                    shadow-lg  break-all hover:bg-gray-100  hover:shadow-blue-900/50 
                    dark:border-gray-700 dark:bg-gray-800"
        >
          <h3 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Token Generator
          </h3>
          <hr className="border border-blue-800" />
          <p className="mb-3 text-l font-normal text-gray-700 dark:text-gray-400">
            Generate random string with the chars you want: uppercase or
            lowercase letters, numbers and/or symbols.
          </p>
          <div>
            <div className="grid grid-cols-2">
              <div>
                <label
                  htmlFor="smallCase"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={lowerCaseFlag}
                    id="smallCase"
                    className="sr-only peer"
                    onChange={(event) =>
                      setLowerCaseFlag(event.currentTarget.checked)
                    }
                  />
                  <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Small Case
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="UpperCase"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={upperCaseFlag}
                    id="UpperCase"
                    className="sr-only peer"
                    onChange={(event) =>
                      setUpperCaseFlag(event.currentTarget.checked)
                    }
                  />
                  <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Upper Case
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="number"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="number"
                    className="sr-only peer"
                    onChange={(event) =>
                      setNumberFlag(event.currentTarget.checked)
                    }
                  />
                  <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Numbers
                  </span>
                </label>
              </div>

              <div>
                <label
                  htmlFor="symbol"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="symbol"
                    className="sr-only peer"
                    onChange={(event) =>
                      setSymbolsFlag(event.currentTarget.checked)
                    }
                  />
                  <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Symbols
                  </span>
                </label>
              </div>
            </div>
            <div className="relative pt-1">
              <label
                htmlFor="tokenLength"
                className="dark:text-gray-400 form-label"
              >
                Length{" "}
                <span className="font-bold dark:text-white text-gray-900">
                  {" "}
                  {value}
                </span>
              </label>
              <input
                type="range"
                className="
                          form-range
                          appearance-none
                          w-full
                          h-2
                          p-0
                          dark:text-white
                          bg-blue-400
                          focus:outline-none focus:ring-0 focus:shadow-none
                        "
                min="0"
                max="512"
                id="tokenLength"
                value={value}
                onChange={(evt) => setValue(parseInt(evt.target.value))}
              />
            </div>

            <text
              id="message"
              values={token}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {token}
            </text>
          </div>
          <div className="flex justify-center">
            <button className="m-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={copyTextToClipboard}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
              <span>Copy</span>
            </button>

            <button className="m-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={generateToken}>
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
          {/* TODO : notificatoin after copied to clipboard  */}

        </div>
      </div>
    </Main>
  );
};

export default tokenGeneratorComponent;
