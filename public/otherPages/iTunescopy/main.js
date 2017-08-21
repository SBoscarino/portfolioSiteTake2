// 5. Create a way to listen for a click that will play the song in the audio play

let searchButton = document.querySelector('.search-button');
let searchInput = document.querySelector('.input');
let resultsSection = document.querySelector('.results');
let musicPlayer = document.querySelector('.music-player');
let searchResultsWords = document.querySelector('.searchResults');

let originalURL = 'https:itunes.apple.com/search?term=';
let finalURL = '';

searchButton.addEventListener('click', function(evt){
  evt.preventDefault();
  let searchValue = searchInput.value;
    finalURL = originalURL + searchValue;
    console.log("this is the search value:",searchValue); //this works
    console.log("this is finalURL:",finalURL); //this works
    // if (searchInput.value === 'null') {
    // alert('Please input a song or artist to continue.')
    // }
  //first then statement gets the access to the site we want. It returns an object, but no data we really need.
  fetch(finalURL)
    .then(function(object){
      console.log("This is the object:",object); //works
      return object.json();
      console.log("this is the returned object", object);
    })
      //second then statement fetches the data from the site and brings it back as an object.
    .then(function(data){
      let contentGoesHere = '';

      //the for loop runs through the array and gives us what we want.
      for (let i = 0; i < data.results.length; i++) {
        let lowercaseArtist = data.results[i].artistName.toLowerCase();
        // console.log("thing",data.results[i]);
        let lowercaseTrack = data.results[i].trackName;

        if (lowercaseTrack === undefined) {
          lowercaseTrack = "no track name";
        } else if               (lowercaseArtist.includes(searchInput.value.toLowerCase()) ||  lowercaseTrack.includes(searchInput.value.toLowerCase())) {

          lowercaseTrack = data.results[i].trackName.toLowerCase();
            // console.log("tracks:",data.results[i].trackName); // works
          contentGoesHere += `
          <div class="musicDiv">
           <img class="artistImage"  src="${data.results[i].artworkUrl100}">
            <div class="artist">${data.results[i].artistName}</div>
            <div class="track">${data.results[i].trackName}</div>
            <audio id="audio" src="${data.results[i].previewUrl}"></a>
          </div>`;
        };
        wordsonsearch = 'Search Results:';
        searchResultsWords.innerHTML = wordsonsearch;
        resultsSection.innerHTML = contentGoesHere;
      };
    });
  });

  let divSelector = document.querySelector('.musicDiv');
  divSelector.addEventListener('click', function(evt){
    var audio = document.getElementById('audio');
    if (audio.paused)
      audio.play();
    else
      audio.pause();
  });
