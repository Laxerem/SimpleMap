import { PropsWithChildren } from "react"
import {ForwardRefComponent, MotionProps, motion} from "framer-motion"

interface SlideTextProps {
    children: React.ReactElement
    className?: string
}

interface IMotionTags {
    [key:string]: ForwardRefComponent<any, MotionProps>
}

const tagMap: IMotionTags = {
    h1: motion.h1,
    h2: motion.h2,
    h3: motion.h3,
    h4: motion.h4,
    p: motion.p
}

export const SlideText: React.FC<PropsWithChildren<SlideTextProps>> = ({children, className}) => {
    const MotionTag = tagMap[String(children.type)]
    const text = String(children.props.children)

    return (
        <motion.div className={className} style={{ display: 'flex', flexWrap: 'wrap', whiteSpace: "pre" }} key={String(text)}>
            {text.split('').map((word, i) => (
                <MotionTag
                key={i}
                initial={{ opacity: 0, filter: 'blur(5px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ delay: i * 0.02, duration: 0.6 }}
              >
                {word}
              </MotionTag>
            ))}
        </motion.div>
    )
}