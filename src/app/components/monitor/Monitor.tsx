'use client';
import Image from "next/image"
import van from "../../../../public/van.webp"
import rudy from "../../../../public/rudy.png"
import ctg from "../../../../public/ctg.webp"
import robotics from "../../../../public/5431.png"
import es_easy from "../../../../public/eseasy.png"
import classes from "./monitor.module.css"
import { useScroll } from "framer-motion"
import { useEffect, useState } from "react";
import { isNear } from "@/app/utils/mathutil";

export const Monitor: React.FC = () => {
    const [img, setImg] = useState(van)
    function scrollEventListener(e: Event) {
        let scrollTop = window.scrollY;

        if(isNear(scrollTop, 0, 200)) {
            setImg(van);
        }

        if(isNear(scrollTop, 947, 200)) {
            setImg(rudy);
        }

        if(isNear(scrollTop, 1894, 200)) {
            setImg(robotics);
        }

        if(isNear(scrollTop, 2841, 200)) {
            setImg(ctg);
        }

        if(isNear(scrollTop, 4735, 200)) {
            setImg(es_easy);
        }

        console.log(scrollTop)
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollEventListener);

        return (() => {
            document.removeEventListener('scroll', scrollEventListener);
        })
    }, [])


    return <div style={{width: '30vw'}}>
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