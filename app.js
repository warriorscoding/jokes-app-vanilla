const reloadBtn = document.getElementById("joke-reload");
const jokeText = document.getElementById("joke-text");
const url = 'https://sv443.net/jokeapi/v2/joke/Programming?&type=single';

function getJoke() {
    fetch(url).then(_ => _.json())
    .then(({joke}) => {
        jokeText.innerHTML = 
            joke.split('\n')
            .map(line => `<p>${line}</p>`).join('');
    }).catch(e => console.log("Error: fetching joke", e))
};

reloadBtn.addEventListener('click', getJoke);
getJoke();