let toggleMenu = document.querySelector('.mobile-toggle');
let headerMenu = document.querySelector('.mobile-toggle + ul');
toggleMenu.addEventListener('click' , function(e){
    e.preventDefault()
    headerMenu.classList.toggle('show');
});
////
///// menu styling und action 

let menuList = document.querySelectorAll('.header-menu > ul li');
let menuArr = Array.from(menuList)
menuArr.forEach(element => {
    element.addEventListener('click',function(e){
        e.preventDefault();
        menuArr.forEach(el=>{
            if(el.classList.contains('active')){
                el.classList.remove('active')}
        });
        element.classList.toggle('active');
        document.getElementById(element.dataset.menu).scrollIntoView({
            behavior:'smooth',
        });
        element.style.cssText = "transition: 200ms linear";
    });
});

//slider item on click 

let rightSliderBtn = document.querySelector('.landing-section .slider-right');
let leftSliderBtn = document.querySelector('.landing-section .slider-left');
let landingBackground = document.querySelector('.landing-section');
let landingHeader = document.querySelector('.landing-text h2');
let landingPara = document.querySelector('.landing-text p');
var sliderCounter = 0;
let sliderArr = ['header.jpg','header2.jpg'];
let sliderHeaderArr = ['Welcome to the <span>Classic</span>','We giud you to super <span>Classic</span>'];
var counter = 0;
rightSliderBtn.onclick = function(e){
    if(counter >= sliderArr.length || counter <= -1 )
    {
        counter = 0;
    }   
    landingBackground.style.cssText = `background-image: url("../../../images/${sliderArr[counter]}");
    transition: 700ms linear;`;
    landingHeader.innerHTML = sliderHeaderArr[counter];
    counter++;
};
leftSliderBtn.onclick = function(e){
    if(counter <= -1 || counter >= sliderArr.length)
    {
        counter = 1;
    } 
    landingBackground.style.cssText = `background-image: url("../../../images/${sliderArr[counter]}");
    transition: 700ms linear;`;
    landingHeader.innerHTML = sliderHeaderArr[counter];
    counter--;
};
//testimonials section start

let testemonialsContainer = document.querySelector('.testemonials-text');
let testemonialsText = document.querySelectorAll('.testemonials-text .client-text');
let testemonialsName = document.querySelectorAll('.testemonials-text .client-name');
let testiTextArr = ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem laborum molestiae, sequi ducimus, quod omnis libero.",
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem laborum molestiae, sequi ducimus, quod omnis libero.",
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem laborum molestiae, sequi ducimus, quod omnis libero."]
let testiNameArr = ['Ali John', 'Jacke Chan', 'Breuce Lee'];
var counter = 0;
setInterval(() => {
    for(i=0; i< testemonialsName.length;i++)
    {
        if(testemonialsText[i].classList.contains('active'))
        {
            testemonialsText[i].classList.remove('active');
            testemonialsText[i].style.display = 'none';
        }
        if(testemonialsName[i].classList.contains('active'))
        {    
            testemonialsName[i].classList.remove('active');
            testemonialsName[i].style.display = 'none';
    }

    }
    if(counter>=testemonialsName.length)
    {
        counter=0;
    }
    testemonialsName[counter].style.display = 'block';
    testemonialsText[counter].style.display = 'block';
    testemonialsName[counter].classList.add('active');
    testemonialsText[counter].classList.add('active');

    counter++;
    
}, 3000);

//testimonials section end

// team image stylieng start 
let teamImg = document.querySelectorAll(".team-img");
let teamHover = document.createElement('span');
let teamContent = document.createElement('span');

teamHover.style.cssText = `position:absolute;
                            left:0; right0;
                            width:100%; height:100%;
                            background-color: #00a94ba6;
                            text-align:center;color:#fff;
                            display:inline-flex; align-items:center;
                            justify-content:center;
                            Z-index: 0;`;
teamContent.style.cssText = `Z-index:1;color:#313131; font-size:16px;font-weight:800 `
teamImg.forEach(element=>{
    element.addEventListener('mouseover',function(e){
        teamContent.textContent = element.dataset.teamover;
        teamHover.appendChild(teamContent)
        console.log(element.dataset.teamover);
        element.appendChild(teamHover);
        
    })
    
    element.addEventListener('mouseleave',function(e){
        element.removeChild(teamHover);

    })
});
// team image stylieng end




