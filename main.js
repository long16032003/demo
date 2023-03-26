var tab = document.querySelectorAll('.tab')
var menu_control = document.querySelectorAll('.menu-control')
tab.forEach(function(item,index){
    item.onclick = function(){
        document.querySelector('.tab.active').classList.remove('active')
        document.querySelector('.menu-control.active').classList.remove('active')
        this.classList.add('active')
        menu_control[index].classList.add('active')
    }
});

var news = document.querySelectorAll('.news')
var title_news = document.querySelectorAll('.title-news')
title_news.forEach(function(item,index){
    item.onmouseover = function(){
        document.querySelector('.news.active').classList.remove('active')
        document.querySelector('.title-news.active').classList.remove('active')
        this.classList.add('active')
        news[index].classList.add('active')
    }
});

// var tabs = document.querySelectorAll('.tab')
// var contents = document.querySelectorAll('.content')
// tabs.forEach(function(item,index){
//     item.onclick = function(){
//         document.querySelector('.tab.active').classList.remove('active')
//         document.querySelector('.content.active').classList.remove('active')
//         item.classList.add('active')
//         contents[index].classList.add('active')
//     }
// });