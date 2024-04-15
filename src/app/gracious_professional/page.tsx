import Image from "next/image";
import { Section } from "../components/sections/Section";
import js_logo from "../../../public/javascript.svg";
import ts_logo from "../../../public/typescript.svg";
import cs_logo from "../../../public/dotnet.svg";
import java_logo from "../../../public/java.svg";
import cpp_logo from "../../../public/cpp.svg";
import { Monitor } from "../components/monitor/Monitor";
import { Background } from "../components/background/Background";
import Script from "next/script";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <main className="flex flex-row">
        <div
          className="sticky h-screen md:flex justify-center items-center hidden"
          style={{ top: 0, width: '30vw' }}
        >
          <Monitor />
        </div>
        <div className="flex flex-col h-100 scroll-auto">
          <Section
            title={<>APP ROUTER</>}
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
          <Section
            title={<>Who Am I?</>}
            description={[
              "I'm currently at the Plano ISD Academy High School, all about STEAM and Project based learning.",
            ]}
            description_line2={['Here is a', <a href="/#">link</a>, 'to my resume.']}
          />
          <Section
            title={
              <>
                FRC 5431 Titan Robotics {' '}
                <Image
                  style={{ width: "50px", height: "50px", display: 'inline' }}
                  alt="Java Logo"
                  src={java_logo.src}
                  width={java_logo.width}
                  height={java_logo.height}
                />
              </>
            }
            description={[
              "Titan Robotics is a First Robotics Competition participant, having made it to states so far in the 2024 Crescendo season.",
            ]}
            description_line2={[
              "I am a Programming Lead, I work on Vision, Hardware Integration, and teaching new members programming. Here is a",
              <a href="https://github.com/frc5431/RobotCode2024">link</a>,
              "to the github",
            ]}
          />
          <Section
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
              "One of the projects at The Academy was to create a game (CTG). I was the programming team lead for the game.",
            ]}
            description_line2={[
              "I oversaw or created most elements in all levels, puzzles, and movement. Here is a",
              <a href="https://github.com/Rubyboat1207/CTG-Antiques-Through-Time">link</a>,
              "to the github",
            ]}
          />
          <Section
            title={<>Cumulo/Cirrus {' '}<Image
            style={{ width: "50px", height: "50px", display: 'inline' }}
            alt="C++ Logo"
            src={cpp_logo.src}
            width={cpp_logo.width}
            height={cpp_logo.height}
          /></>}
            description={[
              "This project is a basic implementation of a Web Store & DX10 Imgui application. This was made for a school project titled K'Ching where students create, market, and sell products",
            ]}
            description_line2={[
              "I created a Lua interface for writing extensions.",
              <a href="https://github.com/mlgnez/cirrus">link</a>,
              "to the github",
            ]}
          />
          <Section
            title={<>ES-Easy {' '}<Image
            style={{ width: "50px", height: "50px", display: 'inline' }}
            alt="Typescript Logo"
            src={ts_logo.src}
            width={ts_logo.width}
            height={ts_logo.height}
          /></>}
            description={[
              "This was not an official school project, this was a personal project for the benifit of the students.",
            ]}
            description_line2={[
              "it replaces the Frontend of our scheduling program with a more user friendly design. along with adding customization features. Here is a",
              <a href="https://github.com/Rubyboat1207/es-easy">link</a>,
              "to the github",
            ]}
          />
        </div>
      </main>
    </div>
  );
}
