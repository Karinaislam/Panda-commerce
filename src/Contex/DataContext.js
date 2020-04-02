import React, {createContext, useState, useEffect} from 'react';
import fakeData from  '../fakeData.json'

export const DataContext = createContext();

export const DataProvider = (props)=> {
    const [data, setData] = useState([]);
    console.log('before effect')
    console.log(fakeData)
    useEffect(()=>{
        fetch("../fakeData.json")
            .then(res=> res.json())
            .then((jsonData)=>{ 
                console.log({jsonData});
                setData(jsonData)
            //console.log(data)
            })
            .catch(err=>console.log({err}))

    }, [])


    return (
        <DataContext.Provider value={data}>
            {props.children}
        </DataContext.Provider>
    )
}