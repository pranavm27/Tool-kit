// import { useRouter } from 'next/router';

import { useTheme } from "next-themes";

import Card from "@/components/card/card";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import { AppConfig } from "@/utils/AppConfig";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const tools = [
    {
      title: "Token Generator",
      anchor: "tokenGenerator",
      desc: "Generate random string with the chars you want: uppercase or lowercase letters, numbers and/or symbols",
    },
    {
      title: "Hash Text",
      anchor: "hashText",
      desc: "Hash a text string using the function you need : MD5, SHA1, SHA256, SHA224, SHA512, SHA384, SHA3 or RIPEMD160",
    },
    {
      title: "UUIDs v4 generator",
      desc: "A universally unique identifier (UUID) is a 128-bit number used to identify information in computer systems. The number of possible UUIDs is 16^32, which is 2^128 or about 3.4x10^38 (which is a lot !). ",
      anchor: "uuidGenerator",
    },
    {
      title: "Integer base converter",
      desc: "Convert number between different bases (decimal, hexadecimal, binary, octal, base64, ...)",
      anchor: "intigerBaseConverter",
    },
    // {
    //   title: "Date Time Converter ",
    //   desc: "Convert date and time into the various different formats",
    //   anchor: "tokenGenerators",
    // },
    {
      title: "Device Info",
      desc: "Get information about your current device (screen size, pixel-ratio, user agent",
      anchor: "deviceInfo",
    },
    {
      title: "Base64 converter",
      desc: "Convert string, files or images into a it's base64 representation.",
      anchor: "base64Converter",
    },
    {
      title: "JSON FORMATER",
      desc: "Prettify your JSON string to a human friendly readable format.",
      anchor: "jsonFormater",
    },
    // {
    //   title: "Bcrypt",
    //   desc: "Hash and compare text string using bcrypt. Bcrypt is a password-hashing function based on the Blowfish cipher.",
    //   anchor: "bcrypt",
    // },
    // {
    //   title: "Case converter",
    //   desc: "Change the case of a string and chose between different formats",
    //   anchor: "tokenGenerators",
    // },
    // {
    //   title: "Encode/decode url formatted strings",
    //   desc: 'Encode to url-encoded format (also known as "percent-encoded") or decode from it.',
    //   anchor: "tokenGenerators",
    // },
    // {
    //   title: "Url parser",
    //   desc: "Parse an url string to get all the different parts (protocol, origin, params, port, username-password, ...)",
    //   anchor: "tokenGenerators",
    // },
    // {
    //   title: "Url parser",
    //   desc: "Parse an url string to get all the different parts (protocol, origin, params, port, username-password, ...)",
    //   anchor: "tokenGenerators",
    // },
    // {
    //   title: "Escape html entities",
    //   desc: "Escape or unescape html entities (replace <,>, &, \" and ' to their html version)",
    //   anchor: "tokenGenerators",
    // },
    // {
    //   title: "Device information",
    //   desc: "Get information about your current device (screen size, pixel-ratio, user agent, ...)",
    //   anchor: "tokenGenerators",
    // },
    // {
    //   title: "Git cheatsheet",
    //   desc: "Git is a decentralized version management software. With this cheatsheet you will have a quick access to the most common git commands.",
    //   anchor: "tokenGenerators",
    // },
    // {
    //   title: "Random port generator",
    //   desc: 'Generate random port numbers outside of the range of "known" ports (0-1023).',
    //   anchor: "tokenGenerators",
    // },
    // {
    //   title: "Crontab generator",
    //   desc: "Validate and generate crontab and get the human readable description of the cron schedule. ",
    //   anchor: "tokenGenerators",
    // },

  ];
  return (
    <Main meta={<Meta title="Tool-kit Home" description="AppConfig." />}>
      <div className="">
        {/* switch themes  */}
        <div>
          <h1>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </button>{" "}
          </h1>
        </div>
        <div className=" ">
          {/* search box */}
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                <svg
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search"
                required
              />
            </div>
            <button
              type="submit"
              className="ml-2 rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </form>
          {/* END SEARCH BOX */}
        </div>
      </div>
      <br />
      <div className="grid grid-cols-4 gap-4">
        {tools.map((item) => {
          return (
            <Card title={item.title} desc={item.desc} anchor={item.anchor} />
          );
        })}
   
        {/* <div className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
          <span role="img" aria-label="Love">
            ♥
          </span>{' '}
        </div> */}
      </div>
    </Main>
  );
};

export default Index;
