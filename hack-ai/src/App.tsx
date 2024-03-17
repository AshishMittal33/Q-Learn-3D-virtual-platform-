import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Roads from "./Pages/Road";
import Tools from "./Pages/Tools";
import Resourse from "./Pages/Resourses";
import Projects from "./Pages/Projects";



export default function App() {
  return (
    // <Wrapper>
    //   <Spline
    //     className="spline"
    //     scene="https://prod.spline.design/tqH8SOYZNKsbktCC/scene.splinecode"
    //     />
      <Container>
        <Toaster/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
                <Home/>
            }/>
            <Route path="/road" element={
                <Roads/>
            }/>
            <Route path="/tool" element={
                <Tools/>
            }/>
            <Route path="/res" element={
                <Resourse/>
            }/>
            <Route path="/Proj" element={
                <Projects/>
            }/>
          </Routes>
        </BrowserRouter>
      </Container>
    // </Wrapper>
  );
}

const Container = styled.div`

`
const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  color: white;
  font-size: 16px;
  margin: 0 auto;
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: -300px;
    width: 100vw;
    height: 100vh;

    @media (max-width: 1024px) {
      transform: scale(1) translateX(-300px);
      transform-origin: center;
    }
    @media (max-width: 800px) {
      transform: scale(1) translateX(-300px);
      transform-origin: center;
    }
    @media (max-width: 600px) {
      transform: scale(1) translateX(-500px);
      transform-origin: center;
    }
    @media (max-width: 375px) {
      transform: scale(1) translateX(-500px);
      transform-origin: center;
    }
  }
`