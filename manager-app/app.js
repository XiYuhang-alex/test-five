const nameInput = document.querySelector('#name-input');
const genreInput = document.querySelector('#genre-input');
const addBtn = document.querySelector('#add-btn');
const list = document.querySelector('#list');
const tip = document.querySelector('#tip');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');

let shows = JSON.parse(localStorage.getItem('shows') || '[]');
const save = () => {
    localStorage.setItem('shows', JSON.stringify(shows));
};

const render = () => {
    list.innerHTML = '';
    const keyword = searchInput.value.trim();
    const shownList = shows.filter(s => s.name.includes(keyword));

    if (shownList.length === 0) {
        list.innerHTML = '<li>没有符合条件的电视剧</li>';
        return;
    }

    shownList.forEach(show => {
        const li = document.createElement('li');
        li.textContent = `《${show.name}》 - 类型: ${show.genre} `;

        const delBtn = document.createElement('button');
        delBtn.textContent = '删除';
        delBtn.onclick = () => {
            shows = shows.filter(s => s.id !== show.id);
            save();
            render();
        };

        li.appendChild(delBtn);
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
    save ();
    render();
};

searchBtn.onclick = () => {
    render();
};
render();