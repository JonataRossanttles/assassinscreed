import React, { createContext, useState, useEffect } from 'react';
import { json } from 'react-router-dom';



const DataContext = createContext();

export const Provider = ({ children }) => {
  const [information, setInformation] = useState([]);
  const localData = localStorage.getItem('assassinsCreedData');
  const [localDatajson,SetlocalDatajson] = useState()  ;
 document.body.style.backgroundColor = 'black'

useEffect(()=>{
  if(localData){
    setInformation(JSON.parse(localData))
    SetlocalDatajson( JSON.parse(localData)) 
   }else{
    
      fetch('/assassinsCreed.json')
        .then((response) => response.json())
        .then(
          (data) => {setInformation(data)
           localStorage.setItem('assassinsCreedData',JSON.stringify(data)) 
                        
                    });
    
   }

},[])

 

  return (
    <DataContext.Provider value={{ information ,localDatajson}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
