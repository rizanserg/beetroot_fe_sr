const API = `https://www.omdbapi.com/?i=tt3896198&apikey=2c17e8c1`;

function SearchComponent () {
    const form = document.createElement('form');

    const input = document.createElement('input');
    input.type = 'text';

    const select = document.createElement('select');
    const options = ['movie', 'series', 'episode'];
    options.forEach((option) => {
        const selectOption = document.createElement('option');
        selectOption.value = option;
        selectOption.textContent = option;
        select.appendChild(selectOption);
    })

    const btn = document.createElement('button');
    btn.textContent = 'Search';

    form.append(input, select, btn);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = input.value;
        const type = select.value;
        if (!title) {
            return;
        }

        const movies = await getMovies({s: title, type});

        movies.forEach((movie) => {
            const movieElement = document.createElement("div");
            movieElement.innerHTML = `
                    <h2>${movie.Title}</h2>
                    <p>Type: ${movie.Type}</p>                    
                    <img src="${movie.Poster}" alt="${movie.Title}">
                `;
            document.body.appendChild(movieElement);
        });

        form.reset();
    });
    return form;
}

async function getMovies (options) {
    try {
        const response = await fetch(`${API}&s=${options.s}&type=${options.type}`);
        const data = await response.json();
        return (data.Search);
    } catch (err) {
        console.log(err);
    }
}

async function bootstrap() {
    const searchComponent = SearchComponent();
    document.body.appendChild(searchComponent);
}
bootstrap()
    .catch(console.log)
