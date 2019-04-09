function mobile(b,sm,rm,m) {
    this.b = b;
    this.sm = sm;
    this.rm = rm;
    this.m = m;
    let dem = 0;

    this.getB = function () {
        return this.b;
    }
    this.getSm = function () {
        return this.sm;
    }
    this.getRm = function () {
        return this.rm;
    }
    this.getM = function () {
        return this.m;
    }

    this.setB = function (b) {
        this.b = b;
    }
    this.setSm = function (sm) {
        this.sm = sm;
    }
    this.setRm = function (rm) {
        this.rm = rm;
    }
    this.setM = function (m) {
        this.m = m;
    }

    this.turnOnOrOff = function(id,idB) {
        if (dem == 0) {
            document.getElementById(id).innerHTML ="off";
            dem++;
            b --;
        }else if (dem == 1) {
            document.getElementById(id).innerHTML = "on";
            dem--;
            b --;
        }
        this.showBattery(idB)
    }

    this.showBattery = function (idB) {
        document.getElementById(idB).innerHTML  = b;
    }

    this.charge = function(idC,idB) {
        if (dem == 0) {
            b = 100;
            // console.log(full);
            document.getElementById(idB).innerHTML = b;
        }
    }

    this.sendMess = function(idS,idB,idInput,idRkia) {
        if (dem == 0) {
            b--;
            document.getElementById(idB).innerHTML = b;
            let stext = document.getElementById(idInput).value;
            sm.push(stext);
            document.getElementById(idS).innerHTML = sm ; //hien thi tin trong hop thu di
            document.getElementById(idInput).value = '';
            this.receivedM(idRkia);
        }
    }

    this.receivedM = function(idRkia) {
        document.getElementById(idRkia).innerHTML = sm;
    }
}


let iphone = new mobile(100,[],[],[]);

let nokia = new mobile(100,[],[],[]);


