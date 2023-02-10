import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider(props){
    const[allPhotos, setAllPhotos] = useState([])

    React.useEffect(() => {
        fetch(`https://picsum.photos/v2/list?page=9&limit=99`)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    }, [])

    return (
        <Context.Provider value={{allPhotos}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}