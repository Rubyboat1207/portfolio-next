'use client';
import Image from "next/image"
import van from "../../../../public/van.webp"
import rudy from "../../../../public/rudy.png"
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

        if(isNear(scrollTop, 711, 200)) {
            setImg(rudy);
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollEventListener);

        return (() => {
            document.removeEventListener('scroll', scrollEventListener);
        })
    }, [])


    return <div>
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