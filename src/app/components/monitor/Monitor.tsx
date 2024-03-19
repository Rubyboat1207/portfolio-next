'use client';
import Image from "next/image"
import van from "../../../../public/van.webp"
import classes from "./monitor.module.css"
import { useScroll } from "framer-motion"
import { useEffect } from "react";

export const Monitor: React.FC = () => {
    function scrollEventListener(e: Event) {
        let scrollTop = document.body.scrollTop;

        console.log(scrollTop)
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollEventListener);

        return (() => {
            document.removeEventListener('scroll', scrollEventListener);
        })
    }, [])


    return <div>
        <Image
            src={van.src}
            alt={""}
            width={van.width}
            height={van.height}
            className={classes.monitorContainer}
            style={{width: '30vw', height: '30vw'}}
          ></Image>
    </div>
}