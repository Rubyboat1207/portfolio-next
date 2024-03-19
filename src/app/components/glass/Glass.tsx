import classes from "./glass.module.css"


interface GlassBoxProps {
  children: React.ReactNode;
}


export const GlassBox: React.FC<GlassBoxProps> = (props) => {


    return (
        <div className={classes.glass}>
            {props.children}
        </div>
    )
}