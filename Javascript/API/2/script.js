function search() {
    let inp = document.getElementById('inp').value;
    const apiKey = "38c8a267e25940bf35aa75921cdd6af2";
    const query = inp;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
            movie = data.results[0]
            console.log(movie.overview)
        })
}

