const elements = {
     masthead: document.querySelector('.nav-container'),
     navMain: document.querySelector('.main-nav'),
     body: document.querySelector('.main-wrapper'),
     ham: document.querySelector('.ham-nav'),
     navList: document.querySelector('.nav-list'),
     navSubList: document.querySelectorAll('.subnav-list'),
     navSubSubList: document.querySelectorAll('.subsubnav-list'),
     navItem: document.querySelectorAll('.nav-item'),
     navSubItem: document.querySelectorAll('.subnav-item'),
     navSubSubItem: document.querySelectorAll('.subsubnav-item')
}

const parentArray = [
     [0,1,2,3],
     [0,1,2,3,4],
     [0,1,2,3,4,5],
 ]

 const arrayOfLengths = parentArray.map((item) => {return item.length})

 console.log(arrayOfLengths)