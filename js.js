window.addEventListener("scroll", function (event) {
  var scroll = this.scrollY;
  console.log(scroll);
  fin()
});

const hi = document.getElementById("nav-home");

function fin(){
  if (scroll > 50){
    //hi.classList.add('democlass');
    console.log("over");
  }

  else if (scroll < 50){
    console.log("under");
  }

  else {
    //hi.classList.add("null")
    console.log("err");
  }
}
