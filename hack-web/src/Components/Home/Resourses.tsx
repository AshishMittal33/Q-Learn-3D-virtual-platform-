import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';

const Resourses = () => {

  return (
    <Container>
        <div>
          Recourses for Web Development<br/>
          Link:<br/>
            Web Development with React<br/>
          
            100 days css<br/>
            JSmaster
        </div>
    </Container>
  )
}

const Container = styled.div`
a{
  display: flex;
  flex-direction: row;
  align-items: center;
}
font-size: 1.5rem;
padding: 1rem;
width: 75vw;
color: white;
height: 65vh;
background: rgba( 255, 129, 17, 0.15 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 7.5px );
-webkit-backdrop-filter: blur( 7.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
display: flex;
align-items: center;
flex-direction: row;
`

export default Resourses
