import React, { useEffect, useState } from 'react'
import './navigation.scss';
import {NavLink} from 'react-router-dom';

function Navigation(props) {

    const[change, setChange] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=> {
            console.log(window.pageYOffset)
            if(window.pageYOffset > 50){
                setChange(true);
            } else{
                setChange(false);
            }
        })
    })

    return(

        <nav className={`${change ? "wideNav" : ""}` }>
            <div>
                <NavLink to="/workpage" activeClassName="active">Work</NavLink>
                <a href="#aboutpage">About me</a>
                <a href="#contactpage">Contact</a>
            </div>
        </nav>
    )
}

export default Navigation;