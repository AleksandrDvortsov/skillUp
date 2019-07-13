let UserManager = {
    data: [
        "Vasia",
        "Ivan",
        "Alex"
    ],
    btnFind: document.querySelector('#btnFind').onclick = function () {
        UserManager.findUser()
    },
    btnList: document.querySelector('#btnList').onclick = function () {
        UserManager.listUser()
    },
    btnClear: document.querySelector('#btnClear').onclick = function () {
        UserManager.clearBlock()
    },
    name: document.querySelector('#txt'),
    block: document.querySelector('#result'),
    findUser: function() {

        if( this.name.value === '') {
            alert('Введите имя');
            return;
        }

        let count = 0;
        for (const key of this.data) {
            if (this.name.value === key){
                count++;
            }
        }
        switch (count){
            case 0: 
                createBlock("Пользователь: " + this.name.value + " был добавлен");
                this.data.push(this.name.value);
                break;
            case 1:
                createBlock(this.name.value);
                break;
            default: 
                console.log('error')
        }
        function createBlock (text) {

            UserManager.clearBlock();

            let t = document.createElement("h2");
            t.appendChild(document.createTextNode(text));
            UserManager.block.appendChild(t);
        }
    },

    listUser: function() {
        UserManager.clearBlock();

        var list = document.createElement('ul');

        for(var i = 0; i < this.data.length; i++) {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(this.data[i]));
            list.appendChild(li);
        }

        this.block.appendChild(list);
    },

    clearBlock: function() {
        while (UserManager.block.firstChild) {
            UserManager.block.removeChild(UserManager.block.firstChild);
        }
    },
}



