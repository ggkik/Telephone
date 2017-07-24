function Model() {
    this.list = [];
}

Model.prototype.add = function (user) {
    if (this.getUserByTel(user.tel) <= -1) {
        this.list.push(user);
        return true;
    } else {
        alert("User tel already exists ");
        return false;
    }
};

Model.prototype.remove = function (tel) {
    var removedIndex = this.getUserByTel(tel);
    if(removedIndex > -1){
        this.list.splice(this.getUserByTel(tel), 1);}

};

Model.prototype.getUserByTel = function (tel) {
    return this.list.findIndex(function (element) {
        return element.tel === tel;
    });
};

Model.prototype.update = function (tel, data) {
    var updatedIndex = this.getUserByTel(tel);
    if (updatedIndex <= -1) {
        Object.assign(this.list[updatedIndex], data);
    }
    return this.list[updatedIndex];
};