const nameInput = document.querySelector('#name-input');
const genreInput = document.querySelector('#genre-input');
const addBtn = document.querySelector('#add-btn');
const list = document.querySelector('#list');
const tip = document.querySelector('#tip');

let shows = [];

const render = () => {
    list.innerHTML = '';
    if (shows.length === 0) {
        list.innerHTML = '<li>暂无待看电视剧</li>';
        return;
    }
    shows.forEach(show => {
        const li = document.createElement('li');
        li.textContent = `《${show.name}》 - 类型: ${show.genre}`;
        list.appendChild(li);
    });
};

addBtn.onclick = () => {
    const name = nameInput.value.trim();
    const genre = genreInput.value.trim();

    if (!name || !genre) {
        tip.textContent = '剧名和类型不能为空！';
        return;
    }
    tip.textContent = '';

    shows.push({ id: Date.now(), name: name, genre: genre });
    nameInput.value = '';
    genreInput.value = '';
    render();
};

render();