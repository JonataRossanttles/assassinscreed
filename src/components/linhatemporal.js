import React, {useState,useEffect, useContext} from 'react'; 
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'
import DataContext from '../datacontext';

function Linhatemporal() {

const {information} = useContext(DataContext)
const parametro = useParams()



    
  return (
    <>

   <h1>LINHA TEMPORAL</h1>
    
    </>
  );
}

export default Linhatemporal;
