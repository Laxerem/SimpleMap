import React, { PropsWithChildren } from "react";
import {motion} from "framer-motion"

interface StageFactsProps {
    facts: Array<string>
}

const StageFacts: React.FC<PropsWithChildren<StageFactsProps>> = ({facts}) => {

    return (
        <>
            <h1>Факты</h1>
            <motion.ul>
            {facts.map((fact, i) => (
                <motion.li
                key={i}
                initial={{ opacity: 0, filter: "blur(5px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ 
                    delay: i * 0.07,
                    duration: 0.7
                }}
                style={{ marginBottom: '8px' }}
                >
                {fact}
                </motion.li>
            ))}
            </motion.ul>
        </>
    )
}

export default StageFacts