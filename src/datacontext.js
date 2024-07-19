import React, { createContext, useState, useEffect } from 'react';


const DataContext = createContext();

export const Provider = ({ children }) => {
  const [information, setInformation] = useState([]);
  const localData = localStorage.getItem('assassinsCreedData');
  const [localDatajson,setlocalDatajson] = useState()  ;
 document.body.style.backgroundColor = 'black'

useEffect(()=>{
  if(localData){
      localStorage.clear()
      fetch('/assassinsCreed.json')
      .then((response) => response.json())
      .then(
        (data) => {setInformation(data)
         localStorage.setItem('assassinsCreedData',JSON.stringify(data)) 
         
         setlocalDatajson( JSON.parse(localData))             
                  });
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
