const ATM = {
    is_auth: false,
    current_user: false,
    current_type: false,

    // all cash of ATM
    cash: 2000,

    // all available users
    users: [
        {number: "0000", pin: "000", debet: 0, type: "admin"}, // EXTENDED
        {number: "0025", pin: "123", debet: 675, type: "user"}
    ],

    // report console
    report_log: [],

    //logs
    messages: [
        //0
        `You are not logined`,
        //1
        `You are enterred incorrect login`,
        //2
        `You are enterred incorrect pin`,
        //3
        `You are authorized`,
        //4
        `You are not `,
        //5
        `You are already logined`,
        //6
        `You are haven't enough money`,
        //7
        `ATM is haven't enough money`,
        //8
        `Incorrect input data`,
        //9
        `You are logout`
    ],

    //change date format
    get_date: function() {
        let full_date = new Date();
        return full_date.toLocaleString();
    },

    //check user validity
    check_user: function(user) {
        if (!this.is_auth) {
            this.report_log.push(`${ATM.get_date()} User not logined`);
            console.log(this.messages[0]);
            return false;
        } else if (user !== this.current_type) {
            this.report_log.push(`${ATM.get_date()} ${this.current_user.number} blocked using unaccess function`);
            console.log(`${this.messages[4]} ${user}`);
            return false;
        } else {
            return true;
        }
    },

    // authorization
    auth: function(number, pin) {
        if(this.is_auth) {
            this.report_log.push(`${ATM.get_date()} ${this.current_user.number} tried logined again`);
            console.log(this.messages[5]);
            return;
        }

        let tmp_current_user = ATM.users.find(user => user.number === number);
        if (tmp_current_user === undefined) {
            this.report_log.push(`${ATM.get_date()} Type in nonexistent user`);
            console.log(this.messages[1]);
        } else if (tmp_current_user.pin === pin) {
            console.log(this.messages[3]);
            this.is_auth = true;
            this.current_user = tmp_current_user;
            this.current_type = tmp_current_user.type;
            this.report_log.push(`${ATM.get_date()} ${this.current_user.number} logined`);
        } else if (tmp_current_user.pin !== pin) {
            this.report_log.push(`${ATM.get_date()} ${number} type in incorrect pin`);
            console.log(this.messages[2]);
        }
    },

    // check current debet
    check: function() {
        if(this.check_user("user")) {
            this.report_log.push(`${ATM.get_date()} ${this.current_user.number} check themselves debet`);
            console.log(`${this.current_user.debet} money`);
        }
    },

    // get cash - available for user only
    getCash: function(amount) {
        if(this.check_user("user") && Number.isInteger(amount)) {
            if (amount > this.current_user.debet) {
                this.report_log.push(`${ATM.get_date()} ${this.current_user.number} haven't enough money`);
                console.log(this.messages[6]);
            } else if (amount > this.cash) {
                this.report_log.push(`${ATM.get_date()} ${this.current_user.number} tried get money, but ATM haven't`);
                console.log(this.messages[7]);
            } else if (amount <=0){
                this.report_log.push(`${ATM.get_date()} ${this.current_user.number} enterred incorrect data`);
                console.log(this.messages[8]);
            } else {
                this.current_user.debet -= amount;
                this.cash -= amount;
                this.report_log.push(`${ATM.get_date()} ${this.current_user.number} get ${amount} money`);
                console.log(`You are get ${amount} money`);
            }
        } else {
            this.report_log.push(`${ATM.get_date()} ${this.current_user.number} enterred incorrect data`);
            console.log(this.messages[8]);
        }
    },

    // load cash - available for user only
    loadCash: function(amount){
        if(this.check_user("user") && Number.isInteger(amount)) {
            this.current_user.debet += amount;
            this.cash += amount;
            this.report_log.push(`${ATM.get_date()} ${this.current_user.number} load ${amount} money`);
            console.log(`You are load ${amount} money`);
        } else {
            this.report_log.push(`${ATM.get_date()} ${this.current_user.number} enterred incorrect data`);
            console.log(this.messages[8]);
        }
    },

    // load cash to ATM - available for admin only - EXTENDED
    load_cash: function(addition) {
        if(this.check_user("admin") && (Number.isInteger(addition) && addition >=0)) {
            this.cash += addition;
            this.report_log.push(`${ATM.get_date()} ${this.current_user.number} load ${addition} money`);
            console.log(`You are load ${addition} money`);
        } else {
            this.report_log.push(`${ATM.get_date()} ${this.current_user.number} enterred incorrect data`);
            console.log(this.messages[8]);
        }
    },

    // get report about cash actions - available for admin only - EXTENDED
    getReport: function() {
        if(this.check_user("admin")) {
            this.report_log.push(`${ATM.get_date()} Total ${this.cash} money`);
            this.report_log.forEach(function(currentValue){
                console.log(currentValue);
            });
        }
    },

    // log out
    logout: function() {
        if (this.check_user(this.current_type)) {
            this.is_auth = false;
            let tmp_current_user = this.current_user.number;
            this.current_user = false;
            this.current_type = false;
            this.report_log.push(`${ATM.get_date()} ${tmp_current_user} logout`);
            console.log(this.messages[9]);
        }
    }
};
