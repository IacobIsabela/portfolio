import React, {Component} from "react";
import styled, {keyframes} from 'styled-components'; 
import { bounce} from 'react-animations'; 
import  './mybouncingtext.css'
const Bounce = styled.div`animation: 3s ${keyframes`${bounce}`} infinite`; 
export default class ReactAnimations extends Component{
    render(){
        return (
        <div className="elements">
           
            <h1>Hello! My name is <h1 className="name">Iacob Isabela</h1> and I aspire to be a </h1>
            
            <Bounce className="bouncing__text">
            <h1> Frontend Developer</h1>
            </Bounce>

        </div>
            
        );
    }
}


