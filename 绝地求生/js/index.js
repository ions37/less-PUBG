window.addEventListener('load', function () {
    let oToolbar = document.querySelector('.toolbar');
    let oNav = document.querySelector('.nav');
    let oMenu = document.querySelector('#myMenu');
    let oMenuUp = document.querySelector('.menu-up');
    let oMenuDown = document.querySelector('.menu-down');
    let oTips = document.querySelector('.tips');
    //初始化fullpage
    new fullpage('#fullpage', {
        //options here
        verticalCentered: false,
        sectionsColor: ['#f00', '#0f0', '#00f', '#000', '#0ff', '#f0f', '#000'],
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
	    menu: '#myMenu',
        onLeave(origin, destination, direction) {
            //第一屏
            if (destination.isFirst) {
                oToolbar.style.display = 'block';
                oNav.style.top = '42px';
                oMenu.style.display = 'none';
            } else {
                oToolbar.style.display = 'none';
                oNav.style.top = '0';
                oMenu.style.display = 'block';
            }
            //最后一屏
            if (destination.isLast) {
                oTips.style.display = 'none';
            } else {
                oTips.style.display = 'block';
            }
        }
        
    });
    //监听菜单点击事件
    oMenuUp.addEventListener('click',function() {
        fullpage_api.moveSectionUp();
    })
    oMenuDown.addEventListener('click',function() {
        fullpage_api.moveSectionDown();
    })
    //初始化第四屏
    initSection4Animation();
})
function initSection4Animation() {
    let oLis = document.querySelectorAll('.section-four>ul>li');
    let oImages = document.querySelectorAll('.section-four>ul>li>img');
    let oH3s = document.querySelectorAll('.section-four>ul>li>h3');
    for (let i = 0; i < oLis.length; i++) {
        oLis[i].addEventListener('mouseenter', function() {
           for (let i = 0; i < oLis.length; i++) {
            oLis[i].style.width = '20%';
           }
           this.style.width = '60%';
           oImages[i].style.opacity = '1';
           oH3s[i].style.opacity = '0';
           if (i >= oLis.length-1) {
            oImages[i].style.right = '0';
           }else {
            
            oImages[i].style.left = '0';
           }
        
        });
        oLis[i].addEventListener('mouseleave', function() {
            for (let i = 0; i < oLis.length; i++) {
                oLis[i].style.width = '33.33%';
            }
            this.style.width = '33.33%';
            oImages[i].style.opacity = '0.5';
           oH3s[i].style.opacity = '0';
            if (i == 0) {
                oImages[0].style.left = '-180px';
            }else if (i == 1) {
                oImages[1].style.left = '-20%';
            }else {
                oImages[2].style.right = '-180px';
            }
        });
    }
    
}