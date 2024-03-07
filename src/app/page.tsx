import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CardContainer>
          <CardBody
            className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
          >
            <CardItem
              translateZ={10}
              className='text-xl font-bold text-neutral-600 dark:text-white'
            >
              Gamer Time
            </CardItem>
          </CardBody>
        </CardContainer>
    </main>
  );
}
