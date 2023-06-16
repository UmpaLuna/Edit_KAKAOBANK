let slides = document.querySelector('.slides');
let slide = document.querySelectorAll('.slides li');
let slideWidth = slide[0].getBoundingClientRect().width ;
let slidesLength = slide.length;
let index = 0;



let pre = document.querySelector('.backer');
let next = document.querySelector('.next');

let firstSlide = slide[0];
let lastSlide = slide[slide.length - 1];

let cloneFirstSlide = firstSlide.cloneNode(true);
let cloneLastSlide = lastSlide.cloneNode(true);


slides.appendChild(cloneFirstSlide);
slides.insertBefore(cloneLastSlide,firstSlide)





pre.addEventListener('click', ()=> moveSlide('pre'));
next.addEventListener('click', ()=> moveSlide('next'));

 slides.addEventListener("transitionend", checkIndex);

// slides.addEventListener('mousedown', dragStart)

// slides.addEventListener('touchstart', dragStart);
// // slides.addEventListener('touchmove', dragMove);
// // slides.addEventListener('touchend', dragEnd);

// function dragStart(e) {
//     e.preventDefault();
//     initialPosition = slides.offsetLeft;

//     if(e.type == 'touchstart'){
//         posX1 = e.touches[0].clientX;
//     } else {
//         posX1 = e.clientX;

//         document.onmouseup = dragEnd;
//         document.onmousemove = dragMove;
//     }
// }

// function dragMove(e) {
//     if(e.type == 'touchmove') {
//         posX2 = posX1 - e.touches[0].clientX;
//         posX1 = e.touches[0].clientX;
//     } else {
//     posX2 = posX1 -e.clientX;
//     posX1 = e.clientX;
//    }

//    slides.style.left = `${slides.offsetLeft - posX2}px`
// }

// function dragEnd() {

//     finalPosition = slides.offsetLeft;
//     console.log(finalPosition)
//     if(finalPosition - initialPosition < -100 ) {
//         moveSlide('next','dragging');
//     } else if(finalPosition - initialPosition > 100) {
//         moveSlide('pre','dragging')
//     } else {
//         slides.style.left = `${initialPosition}px`;
//     }

//     document.onmouseup = null;
//     document.onmousemove = null;
// }


function moveSlide(paraMeter) {
    slides.classList.add('move')
    if(paraMeter == 'next') {
        slides.style.left = `${slides.offsetLeft - slideWidth - 45}px`
        index++;
        showlist();
    } else {
        slides.style.left = `${slides.offsetLeft + slideWidth + 45}px`;
        showbacker();  
        index--;
    }
}

function checkIndex() {
    slides.classList.remove('move');
    if(index == -1) {
        slides.style.left = `-${slidesLength * slideWidth - 45}px`
        index = slidesLength - 1;
    }

    if(index == slidesLength) {
        
        slides.style.left = `-${1* slideWidth + 45}px`
        index = 0;
    }

}

let showing_class = 'showing';
let lists = document.querySelectorAll('.lists li');
let firstList = document.querySelector('.lists> :first-child');
let lastList = document.querySelector('.lists> :last-child');
let listLength = lists.length;
firstList.classList.add(showing_class);

function showlist() {
    let currentList = document.querySelector(`.${showing_class}`);
     if(currentList) {
        currentList.classList.remove(showing_class);
        let nextList = currentList.nextElementSibling;
        if(nextList) {
            nextList.classList.add(showing_class);
        } else {
            firstList.classList.add(showing_class);
        }
     } else {
        firstList.classList.add(showing_class)
     }
}

function showbacker() {
    let currentList = document.querySelector(`.${showing_class}`);
    if(currentList) {
        currentList.classList.remove(showing_class);
        let prevList = currentList.previousElementSibling;
        if(prevList) {
            prevList.classList.add(showing_class);
        } else {
            lastList.classList.add(showing_class);
        }
    } else {
        lastList.classList.add(showing_class);
    }
}

// window에 이벤트를 해야 할 지 제어 해야 할 main에 이벤트를 해야할 지 너무 고민이 되고 무섭네;;;
let imgScroll = document.querySelector('.mainImgwraper');

window.addEventListener('scroll', change);

function change() {
    let main = document.querySelector('main');
    let header = document.querySelector('.header')
    let changeTxt = document.querySelector('.main_title');
    let imgScroll = document.querySelector('.mainImgwraper');
    let main_title = document.querySelector('.main_description');
    let imgScroll_child = imgScroll.getElementsByTagName('div');
    let changeHeight = imgScroll.getBoundingClientRect().height / 10;
    let basis = window.pageYOffset;
    if(changeHeight < basis) {
        main.classList.add('change');
        imgScroll.classList.add('change');
        changeTxt.classList.add('change');
        main_title.classList.add('change');
        header.classList.add('change');
        for(let list of imgScroll_child) {
            list.style.opacity = '0';
        }
        if(imgScroll.getBoundingClientRect().height <= basis) {
            main.classList.remove('change');
            changeTxt.classList.add('another');
        } else {
            changeTxt.classList.remove('another');
        }
    } else if(changeHeight > basis) {
        main.classList.remove('change');
        imgScroll.classList.remove('change');
        changeTxt.classList.remove('change');
        main_title.classList.remove('change');
        header.classList.remove('change');
        for(let list of imgScroll_child) {
            list.style.opacity = '1';
        }
        changeTxt.classList.remove('another');
    }
}

let loan = document.querySelector('.loan');
let byit = document.querySelector('.byit');
let mImgWraper = document.querySelectorAll('.main .mImgWraper');
let h3 = document.querySelectorAll('.main .expl h3 span');

let option = {
    root:null,
    rootMargin: '0px',
    threshold: .3,
}

let observer = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
        if(entry.isIntersecting) {
        
            entry.target.classList.add('inverse');
            
        } else {
            entry.target.classList.remove('inverse');
            
        }
    })
     
},option);
observer.observe(loan);
observer.observe(byit);
mImgWraper.forEach((wraper) => observer.observe(wraper));
h3.forEach((h)=> observer.observe(h));



let parall_1 = document.querySelector('.partner_slider');
let parall_2 = document.querySelector('.kakao_corporation')
let parall1Container = document.querySelector('.partner_slider p');
let parall2Container = document.querySelector('.kakao_corporation p')
let parall1 = document.querySelectorAll('.partner_slider p img');
let parall2 = document.querySelectorAll('.kakao_corporation p img');

// function mkrClone() {
//     for (let i = 0; i < slideCount; i++) {
//       let cloneSlide = slides[i].cloneNode(true);
//       cloneSlide.classList.add("clone");
//       mainSlide.appendChild(cloneSlide);
//     }
//     for (let i = slideCount - 1; i >= 0; i--) {
//       let cloneSlide = slides[i].cloneNode(true);
//       cloneSlide.classList.add("clone");
//       mainSlide.prepend(cloneSlide);
//     }

    function mkrClone(element, lists) {
        for (let i = 0; i < lists.length; i++) {
            let clone = lists[i].cloneNode(true);
              element.appendChild(clone);
        }

        for (let i = lists.length - 1; i >= 0; i--) {
          let clone = lists[i].cloneNode(true);
          element.prepend(clone);
        }
    }

    mkrClone(parall1Container, parall1);
    mkrClone(parall2Container, parall2);




let count1 = 0;
let count2 = 0;


function movingOn(count, element, direction) {
    if(count> element.scrollWidth/2) {
        element.style.transform = `translateX(0)`;
        count = 0;

    }
    element.style.transform = `translateX(${count * direction}px)`
    return count;
}
function init() {
    count1++;
    count2++;

    count1 = movingOn(count1, parall_1, -1)
    count2 = movingOn(count2, parall_2, 1)
    window.requestAnimationFrame(init);
}

  init();
  





  const changeWinter = document.querySelector('.changeWinter');

  let counter = 0;
  let snow = document.querySelector('.snow');
  







//   function creat(i) {
//       //난 진짜 응용 개잘함, 처음에는 실시간 innerwidth값이 반영이 되지를 않아서 화면을 늘리거나 줄여도 애니메이션 효과가 viewport하나에 고정 되어있다. 그래서 생각해 낸 것이 mediaquery로 해보는 거였지만 숫자값을 반환 하지 않아서 실시간 반영이 되지를 않았다. 나에게 필요한 것은 실시간 viewport width값을 반환하여 적용 하는 것이고 그것을 숫자로 적용 하는 것이다 .계속 뒤적거리고 mediaquery 숫자 값을 반환하는 방법을 찾아보았지만 문자열을 반환 하는 거이기 때문에 내 마음속과 타협점을 찾으려 했다 그런데 생각해보니 실시간으로 request해주는 것이 있다. 요번 kakao에서 가장 중요한 animation이다.!! 이것으로 계속 webApi에 width값을 요청하면 어떨까 라는 아이디어로 만들었는데 성공이다. 뿌듯하다.
  
  
//       //  function mediaq() {
//       //     let reSize =window.onresize = function reSize() {
//       //         let width = window.innerWidth;
//       //         window.requestAnimationFrame(mediaq)
//       //         return width;
//       //     };
//       //     return reSize
      
//       //  }
      
    
  
  
    
//       let snow = document.createElement('span');
//       snow.classList.add('snow');
      
//       // snow.style.left = `${Math.random() * (window.innerWidth - 1) + 1}px`;
      
  
//       let body = document.querySelector('body');
//       let reObserver = new ResizeObserver((entries)=> {
//           let body = entries[0];
//            let bodyElement = body.contentRect.width;
//            snow.style.left = `${Math.random()* (bodyElement - 10) +1 }px`;
//       })
//       reObserver.observe(body);
//       snow.style.animationDuration = `${Math.random()* (20 - 8) + 10}s`;
//       snow.style.animationDelay = `${Math.random()*(10 - 1) + 1}s`;
//       snow.style.opacity = `${Math.random()}`;
//       snow.classList.add(i);
//       document.body.append(snow);
//   }
// for(let i =0; i< 300; i++){
//     creat()
// }


      const snowBalls = (i) => {
        let snow = document.createElement('span');
        snow.classList.add('snow');
        snow.classList.add(i);
        let body = document.querySelector('body');
        let reObserver = new ResizeObserver((entries)=> {
            let body = entries[0];
            let bodyElement = body.contentRect.width;
            snow.style.left = `${Math.random()* (bodyElement - 10) +1 }px`;  
        })
      reObserver.observe(body);   
      snow.style.animationDuration = `${Math.random()* (20 - 8) + 8}s`;
      snow.style.animationDelay = `${Math.random()*(10 - 1) + 1}s`;
      snow.style.opacity = `${Math.random()}`;
  
      document.body.append(snow);
  
       if(counter < 300){
           window.requestAnimationFrame(()=>{snowBalls(i)});
           counter++;
       } 
    };



 
    changeWinter.addEventListener('click', (e) => {
        let winter = 'winter';
    snowBalls(winter);
          e.preventDefault();
         this.scrollTo({
          top:0,
          behavior: 'smooth'
        });
    let allAbout = document.querySelectorAll('body ,main, article, footer, .parall_wraper, nav');
    
      for(let el of allAbout) {
          el.classList.add('winter');
      }
    
    });


  
  // function mediaq() {
  //     let reSize = 
  //     window.onresize = function reSize() {
  //         window.requestAnimationFrame(mediaq)
  //          let width = window.innerWidth;
  //          console.log(width)
  //          return width;
  //      };
  //      return  reSize;
       
  //  }
  //  let re = mediaq();

  const startQuery = () => {
      const MediaQueryNew = matchMedia(`(min-width:900px)`);
      let loan_img = document.querySelector('.loan_imgwraper');
      let link_wraper = document.querySelector('.link_wraper');
      let nav = document.querySelector('nav');
      let navHeight = nav.getBoundingClientRect().top;

      function scrollnav() {
        if(window.pageYOffset >= navHeight) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
      };

      const ifMatchesChange = e => {

          if(e.matches) {
             link_wraper.after(loan_img);
             window.removeEventListener('scroll', scrollnav);
          } else {
            window.addEventListener('scroll',scrollnav);
            link_wraper.before(loan_img);
          }
      }
      MediaQueryNew.addListener(ifMatchesChange)
  ifMatchesChange( MediaQueryNew )
  }
  startQuery();


  
  
  
  // changeWinter.addEventListener('click', () => {
  //     let allAbout = document.querySelectorAll('body, article, footer');
  //     window.scrollTo(0,0, {behavior: 'smooth'})
  //       for(let el of allAbout) {
  //           el.classList.add('winter');
  //       }
  
  // });
  
  




