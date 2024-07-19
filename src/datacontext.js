import React, { createContext, useState, useEffect } from 'react';


const DataContext = createContext();

export const Provider = ({ children }) => {
  const [information, setInformation] = useState([]);
 document.body.style.backgroundColor = 'black'

useEffect(()=>{

    
      fetch('/assassinsCreed.json')
      .then((response) => response.json())
      .then(
        (data) => {setInformation(data)
         localStorage.setItem('assassinsCreedData',JSON.stringify(data)) 
         
                  });
 

},[])



  return (
    <DataContext.Provider value={{ information}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

