'use strict';
{
    const images = [
        'img/pic8.gif',
        'img/pic7.gif',
        'img/pic6.gif',
        'img/pic5.gif',
        'img/pic4.gif',
        'img/pic3.gif',
        'img/pic2.gif',
        'img/pic1.gif',
    ];

    let nextNum = 1;
    let currentNum = 0; 
    let prevNum =images.length - 1;
    let isClick = false;
    let timeoutId;
    
    //左サブ画面
    const leftsub = document.getElementById('leftsub');
    const img = document.createElement('img');
    leftsub.appendChild(img).src = images[nextNum];
    
    //メイン画面
    const mainvisual = document.getElementById('mainvisual');
    let initImg = document.importNode(img, false);
    mainvisual.appendChild(initImg).src = images[currentNum];

    //右サブ画面
    const rightsub = document.getElementById('rightsub');
    let newImg = document.importNode(initImg, false);
    rightsub.appendChild(newImg).src = images[prevNum];

    //次の画像に移動する処理
    function nextSlide() {
        nextNum --;
        currentNum --; 
        prevNum --;

        if ( nextNum < 0) {
            nextNum = images.length - 1;
        }
        if ( currentNum < 0 ) {
            currentNum = images.length - 1;
        }
        if (prevNum < 0 ) {
            prevNum = images.length - 1;
        }

        leftsub.appendChild(img).src = images[nextNum];
        mainvisual.appendChild(initImg).src = images[currentNum];
        rightsub.appendChild(newImg).src = images[prevNum];
    }

    //前の画像に移動する処理
    function prevSlide() {
        nextNum ++;
        currentNum ++; 
        prevNum ++;

        if ( nextNum === images.length) {
            nextNum = 0;
        }
        if ( currentNum === images.length ) {
            currentNum = 0;
        }
        if (prevNum === images.length ) {
            prevNum = 0;
        }
    
        leftsub.appendChild(img).src = images[nextNum];
        mainvisual.appendChild(initImg).src = images[currentNum];
        rightsub.appendChild(newImg).src = images[prevNum];
    }

    //自動でスライドしていく処理
    function moveSlide () {
        nextSlide();
        timeoutId = setTimeout(() => {
            moveSlide();
        },3000);
    }

    window.addEventListener('load',() => {
        moveSlide();
    });

    const next = document.getElementById('next');
    next.addEventListener('click',() => {
        isClick = true;
        clearTimeout(timeoutId);
        nextSlide();
        //クリックした後に自動で再度スライドが動く処理
        setTimeout(() => {
            if (isClick === false){
                return;
            }
            isClick = false;
            moveSlide();
        },3000);    
    });

    const prev = document.getElementById('prev');
    prev.addEventListener('click',() => {
        isClick = true;
        clearTimeout(timeoutId);
        prevSlide();
        //クリックした後に自動で再度スライドが動く処理
        setTimeout(() => {
            if (isClick === false){
                return;
            }
            isClick = false;
            moveSlide();
        },3000);
    });
}
