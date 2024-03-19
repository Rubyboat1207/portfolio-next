import Image from "next/image";
import { Name } from "./components/sections/Name";
import profile from "../../public/rudy.png";
import js_logo from "../../public/javascript.svg";
import ts_logo from "../../public/typescript.svg";
import cs_logo from "../../public/dotnet.svg";
import java_logo from "../../public/java.svg";
import cpp_logo from "../../public/cpp.svg";
import { Monitor } from "./components/monitor/Monitor";
import { Background } from "./components/background/Background";
import Script from "next/script";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <main className="flex flex-row">
        <div
          className="sticky h-screen flex justify-center items-center"
          style={{ top: 0 }}
        >
          <Monitor />
        </div>
        <div className="flex flex-col h-100 scroll-auto">
          <Name
            title={<>Hello, World!</>}
            description={[
              "My name is Rudy Soliz. I work in ",
              <Image
                style={{ width: "25px", height: "25px" }}
                alt="Javascript Logo"
                src={js_logo.src}
                width={js_logo.width}
                height={js_logo.height}
              />,
              "Javascript,",
              <Image
                style={{ width: "25px", height: "25px" }}
                alt="Typescript Logo"
                src={ts_logo.src}
                width={ts_logo.width}
                height={ts_logo.height}
              />,
              "Typescript,",
              <Image
                style={{ width: "25px", height: "25px" }}
                alt="Typescript Logo"
                src={cs_logo.src}
                width={cs_logo.width}
                height={cs_logo.height}
              />,
              "DotNET (C#),",
              <Image
                style={{ width: "25px", height: "25px" }}
                alt="Java Logo"
                src={java_logo.src}
                width={java_logo.width}
                height={java_logo.height}
              />,
              "Java, and",
              <Image
                style={{ width: "25px", height: "25px" }}
                alt="Java Logo"
                src={cpp_logo.src}
                width={cpp_logo.width}
                height={cpp_logo.height}
              />,
              "C++.",
            ]}
            description_line2={"Scroll down or use the arrow keys to see more!"}
          />
          <Name
            title={<>Hello</>}
            description={["I'm Spongebob!"]}
          />
          <Name title={<>Hello</>} description={""} />
        </div>
      </main>
    </div>
  );
}
