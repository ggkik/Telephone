function Controller(model, view) {
    this.model = model;
    this.view = view;
    this.view.on('add', this.add);
    this.view.on('delete', this.delete);
    this.view.on('update', this.update)
};

function User(name, surname, tel) {
    this.name = name;
    this.surname = surname;
    this.tel = tel;
};



Controller.prototype.add = function (name, surname, tel) {
    var user = new User(name, surname, tel);
    var result = this.model.add(user);
    if (result) {
        this.view.render(user);
    }
};

Controller.prototype.delete = function (tel) {
    this.model.remove(tel);
    this.view.delete(tel);
};

Controller.prototype.update = function (id, data) {
    this.model.update(id, data);
    var updated = this.view.update()
};