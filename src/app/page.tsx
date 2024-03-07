'use client'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import vanImg from "@/../public/van.webp"
import rudy from "@/../public/rudy.png"
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex" style={{height: 900 +'vh'}}>
        

        <div className="flex w-1/2 justify-center">
          <motion.img src={vanImg.src} style={{'width': '50vw', position: 'sticky', top: '0px'}} />
        </div>
        <div className="flex min-h-screen flex-col items-center w-1/2">
        <CardContainer>
          <CardBody
            className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
          >
            <CardItem
              translateZ={50}
              className='text-xl font-bold text-neutral-600 dark:text-white flex justify-center w-full'
            >
              Rudy Soliz
            </CardItem>
            <CardItem
              translateZ={75}
              className='text-xl font-bold text-neutral-600 dark:text-white flex justify-center w-full mt-8'
            >
              <img src={rudy.src} className="w-40 rounded-xl"/>
            </CardItem>
            <CardItem
              translateZ={30}
              className='text-n font-bold text-neutral-600 dark:text-white flex justify-center w-full mt-4 text-center w-6/10'
            >
              Hello! My name is Rudy Soliz. I am a full-stack software and web developer. Scroll down to learn more!
            </CardItem>
          </CardBody>
        </CardContainer>
        
        </div>
    </main>
  );
}
