import React, {useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { SlideText } from "./SlideText"
import { AnimatePresence, motion } from "framer-motion"


interface TextLoading {
    [url:string]: {
        messages: Array<string>
    }
}

const text_loading: TextLoading = {
    "/home": {
        messages: ["Откалываем айсберги", "Размораживаем пингвинов", "Измеряем градус холода"]
    },
    "/map": {
        messages: ['Прокладываем курс к Антарктиде...', "Рисуем контуры неизведанной земли..."]
    }
}

const PreLoader: React.FC = () => {
    let LOADING_TIME = 4500
    let MESSAGE_TIME = 1500

    const location = useLocation()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [loadingText, setLoadingText] = useState<string>("Собираем припасы")
    const [isLoadingBar, setIsLoadingBar] = useState<boolean>(true)

    const [display, setDisplay] = useState<boolean>(true)
    const [opacity, setOpacity] = useState<number>(1)

    const timersRef = useRef<{
        loading: NodeJS.Timeout | null;
        messages: NodeJS.Timeout | null;
    }>({ loading: null, messages: null});

    const clearAllTimers = () => {
        if (timersRef.current.loading) {
          clearTimeout(timersRef.current.loading);
          timersRef.current.loading = null;
        }
        if (timersRef.current.messages) {
          clearInterval(timersRef.current.messages);
          timersRef.current.messages = null;
        }
    };

    const next_index = (index:number, length:number) => {
        return length > index + 1 ? index + 1 : 0
    }

    useEffect(() => {
        setDisplay(true)
        let message_index = 0
        const timers = timersRef.current
        const messages = text_loading[location.pathname].messages

        timers.messages = setInterval(() => {
            setLoadingText(messages[message_index])
            message_index = next_index(message_index, messages.length)
            console.log("Смена сообщения")
        }, MESSAGE_TIME)

        timers.loading = setTimeout(() => {
            setIsLoading(false)
            clearAllTimers()
        }, LOADING_TIME)

        return () => {
            clearAllTimers()
        }
        

    }, [location.pathname])

    

    useEffect(() => {
        if (!isLoading) {
            setIsLoadingBar(false)
            setOpacity(0)
            setTimeout(() => {
                setDisplay(false)
            }, 1000)
        }
    })

    return(
        <AnimatePresence>
        {display && (
          <motion.div
            className="pre_loader_screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              backgroundColor: `rgba(0,0,0,${opacity})`
            }}
          >
            {isLoadingBar && (
              <motion.div 
                className="pre_loader"
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring", damping: 10 }}
              >
                <motion.img
                    className="loading_image"
                    src="/loading_bar.gif"
                    animate={{
                        y: [0, -10, 0, 10, 0],
                        rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <SlideText>
                  <h1>{loadingText}</h1>
                </SlideText>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    )
}

export default PreLoader