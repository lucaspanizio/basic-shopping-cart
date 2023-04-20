import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

interface IButton {
   title: string
   bgColor: string
   icon?: string           
   iconColor?: string      
   handleClick: () => void 
}

function Button(props: IButton){
   return (
         <button 
            onClick={props.handleClick}
            style={{backgroundColor: props.bgColor}}
         >
            <span>{props.title}&nbsp;
                <i className={props.icon ?? 'fa fa-shopping-cart'} 
                   style={{color: props.iconColor ?? '#FFF'}}> 
                </i>
            </span>         
        </button>
   )
}

export { Button }