const API_KEY = '4a249f04';
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');
const loader = document.getElementById('loader');
const errorDiv = document.getElementById('error');

let timeoutId;

searchInput.addEventListener('input', () => {
    clearTimeout(timeoutId);
    const query = searchInput.value.trim();

    if (query.length < 3) {
        resultsContainer.innerHTML = '';
        return;
    }

    timeoutId = setTimeout(() => fetchMovies(query), 500);
});

async function fetchMovies(query) {
    loader.classList.remove('hidden');
    errorDiv.classList.add('hidden');
    
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
        const data = await response.json();

        if (data.Response === "True") {
            displayResults(data.Search);
        } else {
            throw new Error(data.Error || "Нічого не знайдено");
        }
    } catch (err) {
        resultsContainer.innerHTML = '';
        errorDiv.textContent = err.message;
        errorDiv.classList.remove('hidden');
    } finally {
        loader.classList.add('hidden');
    }
}

function displayResults(movies) {
    resultsContainer.innerHTML = movies.map(movie => `
        <div class="movie-card">
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year} | ${movie.Type}</p>
        </div>
    `).join('');
}