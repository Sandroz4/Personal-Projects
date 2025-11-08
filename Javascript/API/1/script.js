const apiKey = "1fab308981764501b85c1a214ded4756";
const city = "tbilisi";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=
    ${encodeURIComponent(city)}&appid=${apiKey}&units=metric`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));



















// function movieName() {
//     let inp = document.getElementById('inp').value;
//     const apiKey = "38c8a267e25940bf35aa75921cdd6af2";
//     const query = inp;

//     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`)
//         .then(res => res.json())
//         .then(data => {
//             const firstMovie = data.results[0];
//             let heading = document.getElementById('heading');
//             let image = document.getElementById('image');
//             let imdb = document.getElementById('imdb')

//             let adress = 'https://image.tmdb.org/t/p/w300' + firstMovie.poster_path;

//             heading.textContent = firstMovie.overview;
//             imdb.textContent = Math.round(firstMovie.popularity * 10) / 10
//             image.src = adress;


//             console.log(firstMovie);
//         })
//         .catch(err => console.error(err));
// }





























// fetch("https://fakestoreapi.com/products/5")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         let picture = document.getElementById('image')
//         let adress = data.image
//         if (data) {
//             picture.src = adress
//         }
//         else {
//             console.log('picture was not found')
//         }
//     })
//     .catch(error => console.log)


// const apiKey = "1fab308981764501b85c1a214ded4756"; // your key
// const city = "Tbilisi";

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//   .then(res => res.json())
//   .then(data => {
//     console.log("Full data:", data);

//   })
//   .catch(err => console.error("Fetch error:", err));


// const apiKey = '38c8a267e25940bf35aa75921cdd6af2';
// const movieId = 550;

// fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));