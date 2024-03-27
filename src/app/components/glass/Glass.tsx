import classes from "./glass.module.css"


interface GlassBoxProps {
  children: React.ReactNode;
  className?: string;
}


export const GlassBox: React.FC<GlassBoxProps> = (props) => {


    return (
        <div className={`${classes.glass} ${props.className}`}>
            {props.children}
        </div>
    )
}