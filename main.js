// set the image to call the make_big function upon being clicked
var images = document.getElementsByClassName("image");
var buttons = document.getElementsByClassName("buttons");


for (var i = 0; i < images.length; i++) {
  var currImg = images[i];
  currImg.addEventListener("click", make_big);
}


// var overlay = document.getElementById("overlay");
// overlay.addEventListener("click",overlayOff);
//
// for (var i = 0; i < overlay.children; i++) {
//   overlay.children[i].removeEventListener("click", overlayOff);
// }

function make_big() {

  // cloning the container that the clicked image belongs to
  // do not want to move the image itself because then the image would
  // disappear from the underlying grid

  var imgContainer = this.parentElement;
  var cln = imgContainer.cloneNode(true);

  cln.removeEventListener("click", make_big);

  var closeButton = cln.getElementsByClassName("close")[0];
  closeButton.addEventListener("click", closer);

  var nextButton = cln.getElementsByClassName("next")[0];
  nextButton.addEventListener("click", next);

  var prevButton = cln.getElementsByClassName("prev")[0];
  prevButton.addEventListener("click", prev);

  // removing the small class and adding the large class.
  // the large class is what puts the image inside the center
  // and removes the size limitations that the small class puts
  var image = cln.querySelector("img");
  image.classList.remove("small");
  image.classList.add("large");

  // makes the button bar appear (bc it is set to display:none at first)
  var buttons = cln.getElementsByClassName("buttons")[0];
  buttons.classList.add("large");
  buttons.style.display = "flex";

  document.getElementById("overlay").append(cln);
  overlayOn();
}

function closer() {
  imgContainer = this.parentElement.parentElement;
  imgContainer.classList.remove("large");
  imgContainer.classList.add("small");

  // need to deappend the added items to the overlay
  imgContainer.remove();

  overlayOff();
}

function next() {
  var imgContainer = this.parentElement.parentElement;
  var index = parseInt(imgContainer.id)+1;

  var nextIndex = (index+1) % (images.length);

  var imgConts = document.getElementsByClassName("img-container");

  var nextCont = imgConts[nextIndex];
  var cln = nextCont.cloneNode(true);


  var contImg = cln.getElementsByClassName("image")[0];
  contImg.classList.remove("small");
  contImg.classList.add("large");

  var buttons = cln.getElementsByClassName("buttons")[0];
  buttons.classList.add("large");
  buttons.style.display = "flex";

  var closeButton = cln.getElementsByClassName("close")[0];
  closeButton.addEventListener("click", closer);

  var nextButton = cln.getElementsByClassName("next")[0];
  nextButton.addEventListener("click", next);

  var prevButton = cln.getElementsByClassName("prev")[0];
  prevButton.addEventListener("click", prev);

  imgContainer.remove();
  document.getElementById("overlay").append(cln);
}

function prev() {

    var imgContainer = this.parentElement.parentElement;
    var index = parseInt(imgContainer.id)+1;

    var nextIndex = (index-1) % (images.length);

    var imgConts = document.getElementsByClassName("img-container");

    var nextCont = imgConts[nextIndex];
    var cln = nextCont.cloneNode(true);

    var contImg = cln.getElementsByClassName("image")[0];
    contImg.classList.remove("small");
    contImg.classList.add("large");

    var buttons = cln.getElementsByClassName("buttons")[0];
    buttons.classList.add("large");
    buttons.style.display = "flex";

    var closeButton = cln.getElementsByClassName("close")[0];
    closeButton.addEventListener("click", closer);

    var nextButton = cln.getElementsByClassName("next")[0];
    nextButton.addEventListener("click", next);

    var prevButton = cln.getElementsByClassName("prev")[0];
    prevButton.addEventListener("click", prev);

    imgContainer.remove();
    document.getElementById("overlay").append(cln);
}



// to make the overlay appear--this function is called in make_big

function overlayOn() {
  document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
  document.getElementById("overlay").style.display = "none";
}
