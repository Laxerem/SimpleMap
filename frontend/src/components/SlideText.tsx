import { PropsWithChildren } from "react"
import {motion} from "framer-motion"

interface SlideTextProps {
    text: string
}

export const SlideText: React.FC<PropsWithChildren<SlideTextProps>> = ({text}) => {
    return (
        <motion.div style={{ display: 'flex', flexWrap: 'wrap', whiteSpace: "pre" }} key={String(text)}>
            {text.split('').map((word, i) => (
                <motion.h3
                key={i}
                initial={{ opacity: 0, filter: 'blur(5px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ delay: i * 0.04, duration: 0.7 }}
              >
                {word}
              </motion.h3>
            ))}
        </motion.div>
    )
}