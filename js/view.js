function View() {

    this.events = {};
    this.form = document.getElementById("telBook");
    this.inputName = document.getElementById("userName");
    this.inputSurname = document.getElementById("userSurname");
    this.inputTel = document.getElementById("userTel");
    this.list = document.getElementById("listEr");
    this.form.addEventListener('submit', this.handleAdd.bind(this));
}

View.prototype.handleAdd = function () {
    event.preventDefault();
    var userName = this.inputName.value;
    var userSurname = this.inputSurname.value;
    var userTel = this.inputTel.value;
    this.emit('add', userName, userSurname, userTel);
    this.inputName.userName = '';
    this.inputSurname.userSurname = '';
    this.inputTel.userTel = '';
};

View.prototype.handleDelete = function (user) {
    event.preventDefault();
    var userName = this.inputName.value;
    var userSurname = this.inputSurname.value;
    var userTel = this.inputTel.value;
    this.emit('delete', user.tel);
    this.inputName.userName = '';
    this.inputSurname.userSurname = '';
    this.inputTel.userTel = '';
};

View.prototype.on = function (type, handler) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(handler);
};

View.prototype.render = function (user) {
    var that = this;
    var li = document.createElement('li');
    li.id = user.tel;

    var title = document.createElement('span');
    title.innerHTML = user.name;
    title.addEventListener('click', function (event) {
        var parentNode = this.parentNode;
        var editInput = parentNode.querySelector('input[type=text]');
        editInput.value = user.name;
        parentNode.classList.add('editing');
        editInput.focus();
    });
    var edit = document.createElement('input');
    edit.type = 'text';
    edit.addEventListener('blur', function (event) {
        var data = {
            user: event.target.value
        }
        that.emit('update', user.tel, data);
        this.parentNode.classList.remove('editing');
        title.innerHTML = event.target.value;
    });
    var deleteUser = document.createElement('button');
    deleteUser.innerHTML = 'Delete';
    deleteUser.addEventListener('click', function (event) {
        that.list.removeChild(li);
    });
    li.appendChild(edit);
    li.appendChild(title);
    li.appendChild(deleteUser);
    this.list.appendChild(li);
};

View.prototype.delete = function (tel) {
    var deleteList = document.getElementById(tel);
    this.list.removeChild(deleteList)
};

View.prototype.emit = function (type, ...args) {
    if (this.events[type]) {
        this.events[type].forEach(function (handler) {
            handler(args);
        });
    }
};

View.prototype.update = function (tel, updated) {
    var updateLi = document.getElementById(tel);
    var title = updateLi.querySelector("span");
    title.innerHTML = 'Update';
};

