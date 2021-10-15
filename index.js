const joke = document.querySelector('.joke'),
    btn = document.querySelector('input');
btn.addEventListener('click', getjokes)
async function getjokes() {
    try {
        let dadJoke = await (await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })).json()
        joke.innerHTML = dadJoke.joke
    } catch (err) {
        console.log(err);
    }
}
getjokes()