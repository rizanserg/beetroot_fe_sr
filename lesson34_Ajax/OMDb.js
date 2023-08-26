document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("search-form");
    const resultsContainer = document.getElementById("results");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const title = document.getElementById("movie-title").value;
        const type = document.getElementById("type").value;

        const apiKey = "2c17e8c1";

        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${title}&type=${type}`);
        const data = await response.json();

        if (data.Search) {
            const movies = data.Search;
            resultsContainer.innerHTML = "";

            movies.forEach((movie) => {
                const movieElement = document.createElement("div");
                movieElement.innerHTML = `
                    <h2>${movie.Title}</h2>
                    <p>Type: ${movie.Type}</p>
                    <p>Year: ${movie.Year}</p>
                    <p>IMDB ID: ${movie.imdbID}</p>
                    <img src="${movie.Poster}" alt="${movie.Title} Poster">
                `;
                resultsContainer.appendChild(movieElement);
            });
        } else {
            resultsContainer.innerHTML = "No results found.";
        }
    });
});
