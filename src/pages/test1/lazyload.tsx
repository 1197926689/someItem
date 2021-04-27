import React from 'react';
import styles from './lazyload.css';
import mao1 from '../../assets/mao1.png';
import mao2 from '../../assets/mao2.png';
import mao3 from '../../assets/mao3.png';
import mao4 from '../../assets/mao4.png';
import mao5 from '../../assets/mao5.png';
import mao6 from '../../assets/mao6.png';


const lazyload = ()=>{
    

    var imgs = document.querySelectorAll('img');
    //offsetTop是元素与offsetParent的距离，循环获取直到页面顶部
    function getTop(e:any) {
        var T = e.offsetTop;
        while(e = e.offsetParent) {
            T += e.offsetTop;
        }
        return T;
    }

    function lazyLoad(img:any) {
        var H = document.documentElement.clientHeight;//获取可视区域高度
        var S = document.documentElement.scrollTop || document.body.scrollTop;//获取滚动条距顶部高度
        
        for (var i = 0; i < img.length; i++) {
            if (H + S > getTop(img[i])) {
                img[i].src = img[i].getAttribute('data-src');
            }
        }
    }

    window.onload = window.onscroll = function () { //onscroll()在滚动条滚动的时候触发
        lazyLoad(imgs);
    }


    return(
        <>
            <img data-src={mao1} className={styles.img}/><br />
            <img data-src={mao2} className={styles.img}/><br />
            <img data-src={mao3} className={styles.img}/><br />
            <img data-src={mao4} className={styles.img}/><br />
            <img data-src={mao5} className={styles.img}/><br />
            <img data-src={mao6} className={styles.img}/>
        </>
    );
}

export default lazyload;