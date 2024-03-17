import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';

const Resourses = () => {

  return (
    <Container>
        <div><br/>
        Machine Learning Crash Course by Google: [Google machine learning crash course] offers a great introduction to ML concepts.<br/>
Machine Learning from Stanford University by Andrew Ng: This classic course on YouTube: youtube.com by Andrew Ng is a highly recommended starting point.<br/>
Introduction to Deep Learning by MIT: If you're interested in deep learning, a subfield of ML, this MIT course on YouTube: youtube.com is a valuable resource.<br/>
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
font-size: .8rem;
padding: 1rem;
width: 75vw;
color: white;
height: 65vh;
background: rgba( 155, 99, 15, 0.75 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 8.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
display: flex;
align-items: center;
flex-direction: row;
overflow-y: scroll;
`

export default Resourses
