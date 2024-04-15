'use client';
import Image from "next/image"
import van from "../../../../public/van.webp"
import rudy from "../../../../public/picture.png"
import ctg from "../../../../public/ctg.webp"
import robotics from "../../../../public/5431.png"
import cumulo from "../../../../public/eseasy.png"
import es_easy from "../../../../public/eseasy.png"
import classes from "./monitor.module.css"
import { useScroll } from "framer-motion"
import { useEffect, useState } from "react";
import { isNear } from "@/app/utils/mathutil";
import Head from "next/head";

export const Monitor: React.FC = () => {
    const [img, setImg] = useState(van)
    function scrollEventListener(e: Event) {
        let scrollTop = window.scrollY;
        let percent = (scrollTop / document.body.scrollHeight);

        if(isNear(percent, 0, 0.03)) {
            setImg(van);
        }

        if(isNear(percent, 0.142, 0.03)) {
            setImg(rudy);
        }

        if(isNear(percent, 0.28, 0.03)) {
            setImg(robotics);
        }

        if(isNear(percent, 0.42, 0.03)) {
            setImg(ctg);
        }

        if(isNear(percent, 0.57, 0.03)) {
            setImg(cumulo);
        }

        if(isNear(percent, 0.71, 0.03)) {
            setImg(es_easy);
        }

        if(isNear(percent, 0.85, 0.03)) {
            setImg(robotics);
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollEventListener);

        return (() => {
            document.removeEventListener('scroll', scrollEventListener);
        })
    }, [])


    return <div style={{width: '30vw'}}>
        <Head>
            <link
                rel="preload"
                href="../../../../public/picture.png"
                as="image"
            />
            <link
                rel="preload"
                href="../../../../public/ctg.webp"
                as="image"
            />
            <link
                rel="preload"
                href="../../../../public/5431.png"
                as="image"
            />
            <link
                rel="preload"
                href="../../../../public/eseasy.png"
                as="image"
            />
            <link
                rel="preload"
                href="../../../../public/eseasy.png"
                as="image"
            />
        </Head>
        <Image
            src={img.src}
            alt={""}
            width={img.width}
            height={img.height}
            className={classes.monitorContainer}
            style={{width: '30vw', height: '30vw'}}
          ></Image>
    </div>
}