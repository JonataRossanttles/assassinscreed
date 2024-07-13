import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const DataContext = createContext();

export const Provider = ({ children }) => {
  const [information, setInformation] = useState([]);
 


  useEffect(() => {
    fetch('/assassinsCreed.json')
      .then((response) => response.json())
      .then((data) => setInformation(data));
  }, []);

 

  return (
    <DataContext.Provider value={{ information }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
