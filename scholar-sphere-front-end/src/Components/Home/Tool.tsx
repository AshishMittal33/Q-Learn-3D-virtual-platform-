import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';

const Tool = () => {

  return (
    <Container>
        <p>
        <TypeIt
        options={{
            strings: [`Essential Tools for Game Development<br/>
            
            1. Game Engine<br/>
            - Unity, Unreal Engine, Godot, GameMaker Studio 2, CryEngine<br/>
            
            2. Programming Language<br/>
            - C#, C++, Java, JavaScript, Lua, Python<br/>
            
            3. Modeling and Animation Software<br/>
            - Blender, Maya, 3ds Max, Cinema 4D, ZBrush<br/>
            
            4. Texture and Material Creation Software<br/>
            - Photoshop, Substance Painter, Mari, Quixel Mixer<br/>
            
            5. Audio Editing and Creation Software<br/>
            - Audacity, Logic Pro X, Ableton Live, FL Studio<br/>
            
            6. Version Control System<br/>
            - Git, Mercurial, Subversion<br/>
            
            7. Level Design Tools<br/>
            - Hammer (Valve's level editor), WorldMachine, Gaia<br/>
            
            8. Asset Management Software<br/>
            - Perforce Helix Core, Shotgun, Plastic SCM<br/>
            
            9. Debugging and Profiling Tools<br/>
            - Visual Studio, GDB, Unity Profiler, Unreal Engine Profiler<br/>
            
            10. Game Testing Tools<br/>
            - Selenium, Appium, Unity Test Framework, Unreal Engine Test Framework<br/>
            
            11. Game Analytics and Monetization Tools<br/>
            - Google Analytics for Firebase, App Annie, Unity Analytics, Unreal Engine Analytics<br/>
            
            12. Collaboration and Communication Tools<br/>
            - Slack, Discord, Jira, Trello<br/>
            
            13. Game Development Frameworks<br/>
            - LibGDX, SFML, Cocos2d-x, Phaser, Pygame<br/>
            
            14. Game Physics Engines<br/>
            - PhysX (NVIDIA), Havok, Bullet, Box2D<br/>
            
            15. Artificial Intelligence Tools<br/>
            - Unity ML-Agents, Unreal Engine AI System, TensorFlow, PyTorch<br/>`],
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

export default Tool
