import React, { useRef, useState } from 'react';
import styles from  "./drag.css";



const app =()=>{



const dragdiv = document.querySelector("#drag");

const dragdivs = useRef();

function onMouseDown(e:any){
    let downX = e.clientX;
    let downY = e.clientY;
    let startMove = true;
    let divRect = dragdiv.getBoundingClientRect();

    let a = parseInt(e.target.style.width)-parseInt('30px');

    console.log();

    if(isNaN(a)||(downX<=(a+divRect.left)&&downY<=(a+divRect.top))){
        
        e.target.style.cursor = "move";

        window.onmousemove = function(e){
            if(!startMove){
                return;
            }
            let newLeft = e.clientX - downX + divRect.left;
            let newTop = e.clientY - downY + divRect.top;
            dragdivs.current.style.left = newLeft+"px";
            dragdivs.current.style.top = newTop+"px";
            return false;
        }

        window.onmouseup = function(e){
            startMove = false;
            e.target.style.cursor = "default";
        }
    }
}




    return (
        <div 
        id="drag" 
        style={{position:"absolute"}} 
        className={styles.div1} 
        onMouseDown={onMouseDown}
        ref={dragdivs}
        >
        </div>
    );
};

export default app;