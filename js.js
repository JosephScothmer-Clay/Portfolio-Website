document.addEventListener('DOMContentLoaded', function(){
  const navhome = document.getElementById('nav-home');
  const navcasestudies = document.getElementById('nav-case-studies');
  const navabout = document.getElementById('nav-about');
  const navcontact = document.getElementById('nav-contact');
  const elements = document.getElementById('selected');

  function scrollEvent (){
    const scrollable = window.innerHeight;
    const scroll = this.scrollY;
    if (scroll >=0 && scroll < scrollable){
      navcasestudies.classList.remove('selected');
      navabout.classList.remove('selected');
      navcontact.classList.remove('selected');
      navhome.classList.add('selected');
    }
    else if (scroll >=scrollable && scroll < (scrollable*2)){
      navhome.classList.remove('selected');
      navabout.classList.remove('selected');
      navcontact.classList.remove('selected');
      navcasestudies.classList.add('selected');
    }

    else if (scroll >=(scrollable*2) && scroll < (scrollable*3)){
      navhome.classList.remove('selected');
      navcasestudies.classList.remove('selected');
      navcontact.classList.remove('selected');
      navabout.classList.add('selected');
    }

    else if (scroll >=(scrollable*3) && scroll < (scrollable*4)){
      navhome.classList.remove('selected');
      navabout.classList.remove('selected');
      navcasestudies.classList.remove('selected');
      navcontact.classList.add('selected');
    }

    else {
      console.log('err')
    }

  }
  scrollEvent();
  window.addEventListener("scroll", function (event) {
    scrollEvent();
  });

});

window.addEventListener('load', () => {

});
