let submitButton = document.querySelector('#submit');
let searchBar = document.querySelector('#search');
let resultsContainer = document.querySelector('.resultsContainer');
let musicPlayer = document.querySelector('.musicPlayer');
let imageArray = document.querySelectorAll('.play-image');

submitButton.addEventListener('click', function(evt) {
evt.preventDefault();
let searchTerm = searchBar.value;
let html = '';
fetch(`https://itunes.apple.com/search?term=${ searchTerm }`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let resultsArr = data.results;
    resultsArr.forEach(function(result) {
  //For audio files:
      preview = result.previewUrl;
      let resultItem =
        `<div class="result">
          <div class="result-image">
            <div style="background-image:url('${ result.artworkUrl100 }')">
              <img class="play-image not-playing" src='./playbutton.png' data-preview="${ result.previewUrl }" />
            </div>
          </div>
          <a href="${ result.artistViewUrl }" target="_blank" ><h1 class="artist">${ result.artistName }</h1></a>
          <a href="${ result.trackViewUrl }" target="_blank" ><h2 class="song">"${ result.trackName }"</h2></a>
        </div>`
      html += resultItem;
    });
    resultsContainer.innerHTML = html;
    imageArray = document.querySelectorAll('.play-image');
  });
searchBar.value = '';
});


resultsContainer.addEventListener('click', function(evt) {
if (evt.target.hasAttribute('data-preview') && evt.target.classList.contains('not-playing')) {
  let mp4 = evt.target.getAttribute('data-preview');

  musicPlayer.setAttribute('src', mp4);

  musicPlayer.play();

  imageArray.forEach(function(image) {
    image.classList.remove('playing');
    image.classList.add('not-playing');
    image.src = './playbutton.png'
  });
  // Adds/removes class on click.
  evt.target.classList.add('playing');
  evt.target.classList.remove('not-playing');
  evt.target.src = './playbutton.png';

  musicPlayer.addEventListener('ended', function() {
    evt.target.classList.remove('playing');
    evt.target.classList.add('not-playing');
    evt.target.src = './playbutton.png';
  });
  // Pause if playing.
} else if (evt.target.classList.contains('playing')) {
  musicPlayer.pause();
  evt.target.classList.remove('playing');
  evt.target.classList.add('not-playing');
  evt.target.src = './playbutton.png';
};
});
