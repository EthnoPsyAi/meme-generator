/* get the form and container */
const form = document.getElementById("memeForm");
const memeContainer = document.getElementById("memeContainer");

/* when user click submit, do this stuff */
form.addEventListener("submit", function (e) {
  e.preventDefault(); /* forgot this before, browser was acting crazy */

  /* grab what user type, must be three thing */
  const topText = document.getElementById("topText").value;
  const bottomText = document.getElementById("bottomText").value;
  const imageUrl = document.getElementById("imageUrl").value;

  /* make div for new meme, it's like box */
  const meme = document.createElement("div");
  meme.classList.add("meme");

  /* make img tag and give it the url*/
  const img = document.createElement("img");
  img.src = imageUrl;
  meme.appendChild(img);

  /* add top words */
  const top = document.createElement("div");
  top.classList.add("top-text");
  top.innerText = topText;
  meme.appendChild(top);

  /* add bottom words now */
  const bottom = document.createElement("div");
  bottom.classList.add("bottom-text");
  bottom.innerText = bottomText;
  meme.appendChild(bottom);

  /* delete button, is tiny x*/
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", function () {
    meme.remove(); /* before this only deleted button, not full meme */
  });
  meme.appendChild(deleteBtn);

  /* put meme inside the meme house (container) */
  memeContainer.appendChild(meme);

  /* form clean itself now, no need do it manual */
  form.reset(); /* forget this once and inputs stay full */
});

/*
I used some external tutorials to understand how to build this meme generator
the `event.preventDefault()` to stop the page from reloading when the form was submitted. I
learned this from: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
The method `appendChild()` was used a lot to add things to the page like the image and the text.
  I checked examples on: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild*/
