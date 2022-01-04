const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function run() {

  

  // Focus effect
  function focusInput() {
    const inputText = $(".header__left-search-text");
    const headerLeftSearchContainer = $(".header__left-search");

    inputText.addEventListener("focus",() => {
      headerLeftSearchContainer.classList.add("focus");
    })

    inputText.addEventListener("blur",() => {
      headerLeftSearchContainer.classList.remove("focus");
    })

  }

  focusInput();

  function showCounter() {
    const customer = $$(".header__left-content-link")[1];
    const counter = $(".header__left-custom-counter");

    customer.addEventListener("click",() => {
      counter.classList.toggle("open");
    })
  }

  showCounter();

  // Increase number
  function increaseNumber() {
    const plusAdult = $(".header__left-button-plus-adult");
    const plusChildren = $(".header__left-button-plus-children");
    const plusKid =  $(".header__left-button-plus-kid");

    const children = $(".header__left-number-children");
    const adult = $(".header__left-number-adult");
    const kid = $(".header__left-number-baby");

    let numberAdult = 1;
    let numberKid = 1;
    let numberChildren = 1;

    plusAdult.onclick = () => {
      adult.textContent = numberAdult++;
    }

    plusChildren.onclick = () => {
      children.textContent = numberKid++;
    }

    plusKid.onclick = () => {
      kid.textContent = numberChildren++;
    }
    
  }

  increaseNumber();

  // Open language container
  function openLanguage() {
    const language = $(".header__right-language");

    language.onclick = () => {
      language.classList.toggle("open");
    }

  }

  openLanguage();

  // Slider auto
  function sliderAuto() {
    const divImgs = $$(".slider-img-div");
    const nextBtn = $(".nextButton");
    let index = 0;

    function showImg(index) {
      divImgs.forEach((img,imgIndex) => {
        if(imgIndex === index)
          img.classList.add("show");
        else
          img.classList.remove("show");  
      })
    }

    function nextImg() {
      index++;
      if(index >= divImgs.length)
        index = 0;  
      showImg(index);
    }
    nextBtn.onclick = () => {
      nextImg();
    }
    // AutoClick next img
     setInterval(() => {
      nextBtn.click();
    },3000)
   
    showImg(index);

  }

  sliderAuto();

  // Scale
  function scaleImg() {
    const webSliders = $$(".web-content-body-slider-container");

    webSliders.forEach(slider => {
      slider.onmouseover = () => {
        slider.classList.add("scale");
      }
      slider.onmouseout = () => {
        slider.classList.remove("scale");
      }
    })
  }

  scaleImg();
}

run();