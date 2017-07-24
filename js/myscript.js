
// 9. Нужно создать телефонный справочник. Каждый юзер
// телефонной книги это объект у которого есть свойства имя,
//  фамилия и номер телефона. Номер телефона задается в формате
//   ’11-22-33’. Номер телефона уникальный не может быть двух
//   юзеров с одним телефонным номером(это следует учесть при
//    реализация метода на добавления юзеров в список).
//     Сам же объект телефонной книги должен иметь определенный набор методов и свойств.
//  {
//     list: [] // массив объектов в данном случае пользователей
//     findByTel: function(tel) {} // метод который будет возвращать пользователя по номеру тел.
//     updateUserByTel: function(tel) {} // метод который будет обновлять пользователя по номеру телефона
//     addUser: function(user) {} // метод для добавления юзеров
//     getUser: function(tel) {} // метод который будет выводить информацию про юзера по номеру телефона
//     deleteUser: function(tel) {} // сами догадайтесь

var user = {

    lists: [],

    list: function () {
        console.log(this.lists)
    },

    addUser: function (user) {
        // this.lists.push(user);
        // console.log(user.telefon);
        var bool = false;
        for (var obj in this.lists) {
            if (this.lists[obj].telefon == user.telefon) {
                bool = true;
                console.log('Такой юзей  ' + user.lastname + ' уже есть.');
            }
        }
        if (!bool) this.lists.push(user);
    },

    getUser: function (tel) {
        var bool = false;
        for (var obj in this.lists) {
            if (this.lists[obj].telefon == tel) {
                bool = true;
                return console.log(this.lists[obj])
            }
        }
        if (!bool) console.log('Такого номера ' + tel + ' - нет');
    },

    findByTel: function(tel) {
        var bool = false;
        for (var obj in this.lists) {
            if (this.lists[obj].telefon == tel) {
                bool = true;
                return console.log(this.lists[obj].lastname)
            }
        }
        if (!bool) console.log('Такого номера ' + tel + ' - нет');
    },

    deleteUser: function (tel) {
        for (var obj in this.lists) {
            if (this.lists[obj].telefon == tel) {
                this.lists.splice(obj, 1)
            };
        }
    }
};

var users = {
    lastname: "Иванов",
    firstname: "Василий",
    telefon: '11-11-12'
};
var users1 = {
    lastname: "Иванов",
    firstname: "Василий",
    telefon: '11-11-13'
};
var users2 = {
    lastname: "Иванов",
    firstname: "Василий",
    telefon: '11-11-14'
};
var users3 = {
    lastname: "Иванов",
    firstname: "Василий",
    telefon: '11-11-15'
};
var users4 = {
    lastname: "Иванов",
    firstname: "Василий",
    telefon: '11-11-16'
};
var users5 = {
    lastname: "Иванов",
    firstname: "Василий",
    telefon: '11-11-16'
};


user.addUser(users);
user.addUser(users1);
user.addUser(users2);
user.addUser(users3);
user.addUser(users4);
user.addUser(users4);
user.addUser(users5);

user.getUser('11-11-10');
user.deleteUser('11-11-12');
user.list();