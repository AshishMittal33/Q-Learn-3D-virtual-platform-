import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';

const UserWelcome = () => {

  return (
    <Container>
        <p>
        <TypeIt
        options={{
            strings: [`<br/>Game development has evolved significantly in recent years, driven by advancements in technology and the rise of new platforms. In 2023, the industry continues to innovate with a focus on immersive experiences, cross-platform compatibility, and player engagement.<br/>

            One notable trend is the rise of cloud gaming, which allows players to access high-quality games without the need for powerful hardware. This technology has opened up new possibilities for game developers to create ambitious projects that were previously impossible.<br/>
            
            Another key area of innovation is virtual reality (VR) and augmented reality (AR). These technologies are transforming the gaming landscape by offering players unique and immersive experiences. VR headsets allow players to step into virtual worlds, while AR overlays digital content onto the real world.<br/>
            
            In terms of gameplay, there is a growing emphasis on player-centric design. Developers are increasingly focused on creating games that are tailored to the interests and preferences of their target audience. This includes incorporating personalized content, adaptive difficulty levels, and social features.<br/>
            
            Cross-platform compatibility has also become increasingly important, as players expect to be able to play their favorite games on multiple devices. Developers are leveraging technologies such as cloud gaming and cross-play to ensure that their games are accessible to as wide an audience as possible.<br/>
            
            Overall, game development in 2023 is characterized by a focus on innovation, player engagement, and cross-platform accessibility. As technology continues to advance, we can expect to see even more groundbreaking and immersive gaming experiences in the years to come.<br/>`],
            speed: 1,
            waitUntilVisible: true,
        }}
        />
        </p>
    </Container>
  )
}

const Container = styled.div`
p{
    height: 80%;
    color: white;
}
font-size: .8rem;
padding: 1rem;
width: 70vw;
height: 65vh;
background: rgba( 144, 19, 254, 0.6 );
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

export default UserWelcome
