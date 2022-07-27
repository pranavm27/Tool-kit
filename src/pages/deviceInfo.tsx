import Link from "next/link";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import React, { useEffect, useState } from "react";

var http = require("http");
var parser = require("ua-parser-js");

const component = (props: any) => {
  console.log(props);

  const UA = new parser();
  const browser = UA.getBrowser();
  const cpu = UA.getCPU();
  const os = UA.getOS();
  const ua = UA.getUA();
  // const device = UA.getDevice();
  // const engine = UA.getEngine();

  const getIp = () => {
    http.get(
      { host: "api.ipify.org", port: 80, path: "/" },
      function (resp: any) {
        resp.on("data", function (ip: string) {
          setIp(ip.toString());
        });
      }
    );
  };

  const [ip, setIp] = useState("");

  useEffect(() => {
    getIp();
  }, [0]);
  return (
    <Main meta={<Meta title="Hash Text" description="Hash Text" />}>
      <h3>
        <Link href="/"> &lt; Back </Link>
      </h3>
      <div className="flex justify-center ">
        <div
          className="  ml-10 mr-24  rounded-lg  border border-gray-200 bg-white  p-6 
                    shadow-lg  break-all hover:bg-gray-100  hover:shadow-blue-900/50 
                    dark:border-gray-700 dark:bg-gray-800"
        >
          <h3 className=" text-3xl font-bold tracking-tight text-blue-600 dark:text-white">
            Device information
          </h3>
          <p className="mb-3 text-l font-normal text-blue-700 dark:text-gray-400">
            Get information about your current device , OS , user agent, ...
          </p>
          <hr className="mt-3 mb-3  border border-blue-800" />
          <div className="relative pt-1 flex flex-row">
            <div className="device-layout-component ">
              <div className="w-full">
                <h3 className=" text-xl tracking-tight text-blue-600 dark:text-white">
                  Browser Info
                </h3>
              </div>
              <span suppressHydrationWarning>{browser.name}</span> /{" "}
              <span suppressHydrationWarning>{browser.version}</span>
            </div>
            <div className="device-layout-component  ml-10">
              <div className="w-full">
                <h3 className=" text-xl tracking-tight text-blue-600 dark:text-white">
                  Operating System
                </h3>
              </div>
              <span className=" text-blue-600 dark:text-white"></span>{" "}
              <span suppressHydrationWarning>{os.name}</span> /{" "}
              <span suppressHydrationWarning>{os.version}</span>
              <br />
            </div>
            <div className="device-layout-component  ml-10">
              <div className="w-full">
                <h3 className=" text-xl tracking-tight text-blue-600 dark:text-white">
                  CPU
                </h3>
              </div>
              <span className=" text-blue-600 dark:text-white"></span>{" "}
              <span suppressHydrationWarning>{cpu.architecture}</span>
            </div>

            <div className="device-layout-component  ml-10">
              <div className="w-full">
                <h3 className=" text-xl tracking-tight text-blue-600 dark:text-white">
                  User Agent
                </h3>
              </div>
              <span className=" text-blue-600 dark:text-white"></span>{" "}
              <span suppressHydrationWarning>{ua}</span>
            </div>
          </div>

          <div className="mt-10 relative pt-1 flex ">
            <div className="device-layout-component">
              <div className="w-full">
                <h3 className=" text-xl tracking-tight text-blue-600 dark:text-white">
                  IP Address
                </h3>
              </div>
              <span className=" text-blue-600 dark:text-white"></span>{" "}
              <span>{ip}</span>
            </div>
            <div className="device-layout-component">
              <div className="w-full">
                <h3 className=" text-xl tracking-tight text-blue-600 dark:text-white">
                  IP Address
                </h3>
              </div>
              <span className=" text-blue-600 dark:text-white"></span>{" "}
              <span>{ip}</span>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default component;
