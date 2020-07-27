import React from 'react';

// props => {className = ' oque alguem passar', href="/"}
function ButtonLink(props){
    console.log(props)
    return(
       <a href={props.href} className={props.className}>
           {props.children}
           
       </a>
    )
}

export default ButtonLink;