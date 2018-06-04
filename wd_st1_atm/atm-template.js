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
    // authorization
    auth: function(number, pin) {
      if(this.is_auth) {
        console.log("You are already logined");
        return;
      }

      let tmp_current_user = ATM.users.find(user => user.number === number);
      if (tmp_current_user === undefined) {
        console.log("You are enterred incorrect login");
      } else if (tmp_current_user.pin === pin) {
        console.log("You are authorized");
        this.is_auth = true;
        this.current_user = tmp_current_user;
        this.current_type = tmp_current_user.type;
        this.report_log.push(`User ${this.current_user.number} logined`)
      } else if (tmp_current_user.pin !== pin) {
        console.log("You are enterred incorrect pin");
      }
      delete tmp_current_user;
    },
    // check current debet
    check: function() {
      if(!this.is_auth) {
        console.log("You are not logined");
        return;
      } else {
        console.log(`${this.current_user.debet} money`);
      }
    },
    // get cash - available for user only
    getCash: function(amount) {
      if(!this.is_auth) {
        console.log("You are not logined");
        return;
      } else if (this.current_type === "admin") {
        console.log("You are not user");
        return;
      } else if (Number.isInteger(amount)) {
        if (amount > this.current_user.debet) {
          console.log("You are haven't enough money");
        } else if (amount > this.cash) {
          console.log("ATM is haven't enough money");
        } else {
          this.current_user.debet -= amount;
          this.cash -= amount;
          this.report_log.push(`User ${this.current_user.number} get ${amount} money`)
          console.log(`You are get ${amount} money`);
        }
      } else {
        console.log("Incorrect input data");
      }
    },
    // load cash - available for user only
    loadCash: function(amount){
      if(!this.is_auth) {
        console.log("You are not logined");
        return;
      } else if (this.current_type === "admin") {
        console.log("You are not user");
        return;
      } else if (Number.isInteger(amount)){
        this.current_user.debet += amount;
        this.report_log.push(`User ${this.current_user.number} load ${amount} money`)
        console.log(`You are load ${amount} money`);
      } else {
        console.log("Incorrect input data");
      }
    },
    // load cash to ATM - available for admin only - EXTENDED
    load_cash: function(addition) {
      if(!this.is_auth) {
        console.log("You are not logined");
        return;
      } else if (this.current_type === "user") {
        console.log("You are not admin");
        return;
      } else if (Number.isInteger(addition)){
        this.cash += addition;
        this.report_log.push(`Admin ${this.current_user.number} load ${addition} money`)
        console.log(`You are load ${addition} money`);
      } else {
        console.log("Incorrect input data");
      }
    },
    // get report about cash actions - available for admin only - EXTENDED
    getReport: function() {
      if(!this.is_auth) {
        console.log("You are not logined");
        return;
      } else if (this.current_type === "user") {
        console.log("You are not admin");
        return;
      } else {
        this.report_log.push(`Total ${this.cash} money`)
        console.log(ATM.report_log);
      }
    },
    // log out
    logout: function() {
      if(!this.is_auth) {
        console.log("You are not logined");
        return;
      } else {
        this.is_auth = false;
        this.current_user = false;
        let tmp_current_user = this.current_user.number;
        this.current_type = false;
        this.report_log.push(`User ${tmp_current_user} logout`)
        delete tmp_current_user;
        console.log("You are logout");
      }
    }
}
