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
            description_line2={
              "Scroll down or use the up and down arrow keys to see more!"
            }
          />
          <Name
            title={<>Who Am I?</>}
            description={[
              "I'm currently at the Plano ISD Academy High School, all about STEAM and Project based learning.",
            ]}
            description_line2={['Here is a', <a href="/#">link</a>]}
          />
          <Name
            title={
              <>
                Antiques Through Time {' '}
                <Image
                  style={{ width: "50px", height: "50px", display: 'inline' }}
                  alt="C# Logo"
                  src={cs_logo.src}
                  width={cs_logo.width}
                  height={cs_logo.height}
                />
              </>
            }
            description={[
              "One of the projects at The Academy was to create a game (CTG). I acted as programming lead",
            ]}
            description_line2={[
              "I oversaw or created most elements in all levels, puzzles, and movement. Here is a",
              <a href="/#">link</a>,
              "to project",
            ]}
          />
          <Name
            title={<>Cumulo/Cirrus {' '}<Image
            style={{ width: "50px", height: "50px", display: 'inline' }}
            alt="C++ Logo"
            src={cpp_logo.src}
            width={cpp_logo.width}
            height={cpp_logo.height}
          /></>}
            description={[
              "This project was a basic implementation of a Web Store & DX10 Imgui application.",
            ]}
            description_line2={[
              "I created a Lua interface for writing extensions.",
              <a href="/#">link</a>,
              "to the game",
            ]}
          />
        </div>
      </main>
    </div>
  );
}
