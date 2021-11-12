const button = document.querySelector('#b1');
const jokes = document.querySelector("#jokes");

const addNewJoke = async() => {
    const jokeText = await getJoke();
    const newLI = document.createElement('li');
    newLI.append(jokeText);
    jokes.append(newLI);
}


const getJoke = async() => {
    const config = {headers : {accept :'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
}

button.addEventListener('click',addNewJoke);
