document.addEventListener('DOMContentLoaded', function(){
  const navhome = document.getElementById('nav-home');
  const navcasestudies = document.getElementById('nav-case-studies');
  const navabout = document.getElementById('nav-about');
  const navcontact = document.getElementById('nav-contact');
  const elements = document.getElementById('selected');

  function scrollEvent (){
    const scrollable = window.innerHeight;
    const scroll = this.scrollY;
    if (scroll >=0 && scroll < (scrollable - scrollable/5.5)){
      navcasestudies.classList.remove('selected');
      navabout.classList.remove('selected');
      navcontact.classList.remove('selected');
      navhome.classList.add('selected');
    }
    else if (scroll >=(scrollable - scrollable/5.5) && scroll < (scrollable*4 - scrollable/5.5)){
      navhome.classList.remove('selected');
      navcasestudies.classList.remove('selected');
      navcontact.classList.remove('selected');
      navabout.classList.add('selected');
    }

    else if (scroll >=(scrollable*4 - scrollable/5.5) && scroll < (scrollable*5)){
      navhome.classList.remove('selected');
      navabout.classList.remove('selected');
      navcontact.classList.remove('selected');
      navcasestudies.classList.add('selected');
    }

    else if (scroll >=(scrollable*5) && scroll < (scrollable*8)){
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
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.setAttribute('autocomplete', 'off')
    input.setAttribute('autocorrect', 'off')
    input.setAttribute('autocapitalize', 'off')
    input.setAttribute('spellcheck', false)
  })

  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {stickynav()};

  // Get the navbar
  var navbar = document.getElementById('navbar');
  navbar.classList.add("navbar-relative");
  var lkdn = document.getElementsByClassName('fa-linkedin');

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function stickynav() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = (scrolled + "%");
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("navbar-fixed");
        navbar.classList.remove("navbar-relative");
      } else {
        navbar.classList.remove("navbar-fixed");
        navbar.classList.add("navbar-relative");
      }
    }

    function validateForm(){
      var inpFn = document.getElementById("inpFn");
      if(!inpFn.checkValidity()) {
        alert("no");
      } else {
        alert("yes");
      }
    }
});
