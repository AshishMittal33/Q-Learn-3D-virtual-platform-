import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';

const Project= () => {

    return (
        <Container>
            <p>
            <TypeIt
            options={{
                strings: [`Creating a basic game using Unity is a great way to learn the fundamentals of game development. Below, I'll outline a simple game idea along with some basic steps to get started:<br/>

                Game Idea: "Avoid the Obstacles"<br/>
                
                In this game, the player controls a character that moves horizontally across the screen. The objective is to avoid incoming obstacles by jumping over them. The game gets progressively harder as the player advances, with obstacles appearing more frequently and moving faster.<br/>
                
                Basic Steps to Create the Game:<br/>
                
                1. Set Up Your Project<br/>
                   - Open Unity and create a new 2D project.<br/>
                   - Set up your project settings, including resolution and aspect ratio.<br/>
                
                2. Create the Player Character<br/>
                   - Import or create a simple sprite for the player character.<br/>
                   - Create a new GameObject for the player.<br/>
                   - Attach a Rigidbody2D component to the player GameObject to enable physics interactions.<br/>
                   - Write a simple script to handle player movement and jumping.<br/>
                
                3. Create Obstacles:<br/>
                   - Import or create sprite(s) for the obstacles.<br/>
                   - Create a new GameObject for the obstacles.<br/>
                   - Write a script to spawn obstacles at random intervals and positions.<br/>
                
                4. Implement Gameplay Mechanics:<br/>
                   - Add collision detection to detect when the player collides with obstacles.<br/>
                   - Implement scoring system.<br/>
                   - Increase difficulty over time (e.g., increase obstacle speed or spawn rate).<br/>
                
                5. UI and Menus:<br/>
                   - Create a simple UI for displaying score and other relevant information.<br/>
                   - Implement a main menu and game over screen.<br/>
                
                6. Audio:<br/>
                   - Add background music and sound effects for jumping, collisions, etc.<br/>
                
                7. Testing and Debugging:<br/>
                   - Test your game frequently to identify and fix bugs.<br/>
                   - Adjust gameplay elements as needed for better balance and fun.<br/>
                
                8. Polish and Optimization:<br/>
                   - Optimize your game for performance, especially if targeting mobile devices.<br/>
                   - Add visual effects or animations to enhance the player experience.<br/>
                
                9. Build and Deployment:<br/>
                   - Build your game for your target platform(s) (e.g., PC, mobile).<br/>
                   - Deploy your game for testing or distribution.<br/>
                
                Example Code for Player Movement:<br/>
                
                csharp<br/>
                using UnityEngine;<br/>
                
                public class PlayerController : MonoBehaviour<br/>
                {<br/>
                    public float moveSpeed = 5f;<br/>
                    public float jumpForce = 10f;<br/>
                    public Transform groundCheck;<br/>
                    public LayerMask groundLayer;<br/>
                
                    private Rigidbody2D rb;<br/>
                    private bool isGrounded;<br/>
                
                    void Start()<br/>
                    {<br/>
                        rb = GetComponent<Rigidbody2D>();<br/>
                    }<br/>
                
                    void Update()<br/>
                    {<br/>
                        float moveInput = Input.GetAxis("Horizontal");<br/>
                        rb.velocity = new Vector2(moveInput * moveSpeed, rb.velocity.y);<br/>
                
                        isGrounded = Physics2D.OverlapCircle(groundCheck.position, 0.1f, groundLayer);<br/>
                
                        if (isGrounded && Input.GetKeyDown(KeyCode.Space))<br/>
                        {<br/>
                            rb.velocity = new Vector2(rb.velocity.x, jumpForce);<br/>
                        }<br/>
                    }<br/>
                }<br/>
                `],
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
export default Project
