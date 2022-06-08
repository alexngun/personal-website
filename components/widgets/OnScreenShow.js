import { useRef } from 'react'
import useOnScreen from '../../hooks/useOnScreen'

function OnScreenShow({children, className=""}) {

    const ref = useRef()
    const isVisble = useOnScreen(ref)

    const rStyle = {
        width: "100%", height: "100%", 
        opacity: isVisble?"1":"0",
        transform: `translateY(${isVisble?"0px":"40px"})`,
        transition: "all ease-in-out 1s"
    }

    return (
        <div ref={ref} className={className}>
            <div
            style={rStyle}
            >
                {children}
            </div>
        </div>
    )

}

export default OnScreenShow