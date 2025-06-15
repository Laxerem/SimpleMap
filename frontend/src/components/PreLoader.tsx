import React, { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"

interface TextLoading {
    [url:string]: {
        messages: Array<string>
    }
}

const text_loading: TextLoading = {
    "/home": {
        messages: ["Собираемся в экспедицию", "Нанимаем рабочих", "Готовимся к отплытию"]
    },
    "/map": {
        messages: ['Готовим карты', "Молимся", "Начинаем путь"]
    }
}

const PreLoader: React.FC = () => {
    let LOADING_TIME = 3000

    const location = useLocation()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [loadingText, setLoadingText] = useState<string>("Грузимся")
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
        }, 700)

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
        <div className="pre_loader_screen"
        style={{
            display: display ? "flex" : "none",
            backgroundColor: `rgba(0,0,0,${opacity})`
        }}>
            {isLoading ? (<div className="pre_loader">
                <img className="loading_image" src="/loading_bar.gif"/>
                <h3>{loadingText}</h3>
            </div>) : null}
        </div>
    )
}

export default PreLoader