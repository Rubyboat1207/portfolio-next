import Image from "next/image";
import { Name } from "./components/sections/Name";
import profile from "../../public/rudy.png";
import { Monitor } from "./components/monitor/Monitor";

export default function Home() {
  return (
    <div>
      <main className="flex flex-row">
        <div
          className="sticky h-screen flex justify-center items-center"
          style={{ top: 0 }}
        >
          <Monitor/>
        </div>
        <div className="flex flex-col h-100 scroll-auto">
          <Name
            title={<>Hello, World!</>}
            description={"My name is Rudy Soliz."}
          />
          <Name title={<>Hello</>} description={"Test test testing 123 yay"} />
          <Name title={<>Hello</>} description={""} />
        </div>
      </main>
    </div>
  );
}
