import React from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState,useEffect } from 'react';


const ResultPopup = ({item,closePopup})=>{
  const [show, setShow] = useState({show:true,value:item});
useEffect(()=>{
  setShow(prev=>({...prev,show:true,value:item}))
},[])

  const handleClose = () => {closePopup(); setShow(false);}
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="bottom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='fw-bold'>{item[0][0]}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{show.value[0][1]==='Nil'?<p>Not finished yet</p>:<>          <p>{`First: ${item[0][1]} - ${item[1][1]}`}</p>
          <p>{`Second: ${show.value[0][2]} - ${show.value[1][2]}`}</p>
          <p>{`Third: ${show.value[0][3]} - ${show.value[1][3]}`}</p></>}

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ResultPopup