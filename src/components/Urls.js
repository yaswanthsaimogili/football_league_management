import React ,{createContext,useState}from 'react'
import Routing from './Routing';

export const store = createContext();
function Urls() {
  const [url,setUrl]=useState("http://localhost:8080/admin")
  return (
    <store.Provider value ={[url,setUrl]}>
<Routing/>

    </store.Provider>

  )
}

export default Urls