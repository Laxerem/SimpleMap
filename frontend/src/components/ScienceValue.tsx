import { AnimatePresence, motion } from "framer-motion";
import React, { PropsWithChildren, useEffect, useState } from "react";

export interface ScienceValueProps {
    name: string,
    value: string[]
}

interface IScienceValue {
    props: ScienceValueProps
}


export const ScienceValue: React.FC<PropsWithChildren<IScienceValue>> = ({props}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [click, setClick] = useState<number>(0);

    useEffect(() => {
        if (isOpen) {
            setIsOpen(false)
        }
        else {
            setIsOpen(true)
        }
    }, [click])

    return (
        <div className="science_value">
            <div className="science_value_container">
                <div className="science_name"><h3>{props.name}</h3></div>
                <div className="value_button"
                onMouseUp={() => setClick(click + 1)}
                style={{
                    cursor: "pointer",
                    backgroundImage: isOpen ? `url('/bottom.svg')` : undefined,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center bottom',
                    backgroundColor: 'rgb(255, 255, 255)',
                    backgroundSize: '60%' // теперь работает корректно
                }}
                >
                </div>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <ul className="science_value_list">
                        {props.value.map((prop, index) => (
                            <li key={index}>{prop}</li>
                        ))}
                    </ul>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}