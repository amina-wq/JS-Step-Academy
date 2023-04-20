// Сделайте сайт с двумя кнопками добавить/удалить и очистить. 
// При нажатии на добавить появляется картинка, при нажатии на удалить удаляется. 
// При нажатии на очистить удаляются все картинки.

function addPicture() {
    let pictureContainer = document.getElementById('pictureContainer');
    let li = document.createElement('li');

    let img = document.createElement('img');
    img.src = `https://placekitten.com/${Math.floor(Math.random() * 200) + 50}`;
    
    li.appendChild(img);

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        pictureContainer.removeChild(li);
    }
    
    li.appendChild(deleteButton);

    pictureContainer.appendChild(li);
};

function removeAll(){
    let pictureContainer = document.getElementById('pictureContainer');
    pictureContainer.innerHTML = '';
};