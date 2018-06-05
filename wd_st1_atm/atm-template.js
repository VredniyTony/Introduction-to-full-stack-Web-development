const ATM = {
    is_auth: false,
    current_user:false,
    current_type:false,

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
      {logs: `You are not logined`},
      //1
      {logs:`You are enterred incorrect login`},
      //2
      {logs:`You are enterred incorrect pin`},
      //3
      {logs:`You are authorized`},
      //4
      {logs:`You are not `},
      //5
      {logs:`You are already logined`},
      //6
      {logs:`You are haven't enough money`},
      //7
      {logs:`ATM is haven't enough money`},
      //8
      {logs:`Incorrect input data`},
      //9
      {logs:`You are logout`},
    ],

    //check user validity
    check_user: function(user) {
      if (!this.is_auth) {
        this.report_log.push(`${new Date()} User not logined`)
        console.log(this.messages[0]);
        return false;
      } else if (this.current_type !== user || user !== "0") {
        this.report_log.push(`${new Date()} ${this.current_user.number} blocked using unaccess function`)
        console.log(`${this.messages[4]} ${user}`);
        return false;
      } else {
        return true;
      }
    },

    // authorization
    auth: function(number, pin) {
        if(this.is_auth) {
          this.report_log.push(`${new Date()} ${this.current_user.number} tried logined again`)
          console.log(this.messages[5]);
          return;
      }

      let tmp_current_user = ATM.users.find(user => user.number === number);
      if (tmp_current_user === undefined) {
        this.report_log.push(`${new Date()} Type in nonexistent user`)
        console.log(this.messages[1]);
      } else if (tmp_current_user.pin === pin) {
        console.log(this.messages[3]);
        this.is_auth = true;
        this.current_user = tmp_current_user;
        this.current_type = tmp_current_user.type;
        this.report_log.push(`${new Date()} ${this.current_user.number} logined`)
      } else if (tmp_current_user.pin !== pin) {
        this.report_log.push(`${new Date()} ${this.current_user.number} type in incorrect pin`)
        console.log(this.messages[2]);
      }
      delete tmp_current_user;
    },
    // check current debet
    check: function() {
      if(!this.check_user("user")) {
        return;
      } else {
        this.report_log.push(`${new Date()} ${this.current_user.number} check themselves debet`)
        console.log(`${this.current_user.debet} money`);
      }
    },
    // get cash - available for user only
    getCash: function(amount) {
      if(!this.check_user("user")) {
        return;
      } else if (Number.isInteger(amount)) {
        if (amount > this.current_user.debet) {
          this.report_log.push(`${new Date()} ${this.current_user.number} haven't enough money`)
          console.log(this.messages[6]);
        } else if (amount > this.cash) {
          this.report_log.push(`${new Date()} ${this.current_user.number} tried get money, but ATM haven't`)
          console.log(this.messages[7]);
        } else {
          this.current_user.debet -= amount;
          this.cash -= amount;
          this.report_log.push(`${new Date()} ${this.current_user.number} get ${amount} money`)
          console.log(`You are get ${amount} money`);
        }
      } else {
        this.report_log.push(`${new Date()} ${this.current_user.number} enterred incorrect data`)
        console.log(this.messages[8]);
      }
    },
    // load cash - available for user only
    loadCash: function(amount){
      if(!this.check_user("user")) {
        return;
      } else if (Number.isInteger(amount)){
        this.current_user.debet += amount;
        this.report_log.push(`${new Date()} ${this.current_user.number} load ${amount} money`)
        console.log(`You are load ${amount} money`);
      } else {
        this.report_log.push(`${new Date()} ${this.current_user.number} enterred incorrect data`)
        console.log(this.messages[8]);
      }
    },
    // load cash to ATM - available for admin only - EXTENDED
    load_cash: function(addition) {
      if(!this.check_user("admin")) {
        return;
      } else if (Number.isInteger(addition)){
        this.cash += addition;
        this.report_log.push(`${new Date()} ${this.current_user.number} load ${addition} money`)
        console.log(`You are load ${addition} money`);
      } else {
        this.report_log.push(`${new Date()} ${this.current_user.number} enterred incorrect data`)
        console.log(this.messages[8]);
      }
    },
    // get report about cash actions - available for admin only - EXTENDED
    getReport: function() {
      if(!this.check_user("admin")) {
        return;
      } else {
        this.report_log.push(`${new Date()} Total ${this.cash} money`)
        console.log(ATM.report_log);
      }
    },
    // log out
    logout: function() {
      if (this.check_user(" ")) {
        return;
      } else {
        this.is_auth = false;
        this.current_user = false;
        let tmp_current_user = this.current_user.number;
        this.current_type = false;
        this.report_log.push(`${new Date()} ${this.current_user.number} logout`)
        delete tmp_current_user;
        console.log(this.messages[9]);
      }
    }
}
