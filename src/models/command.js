'use strict';

const Config = require('../config');

module.exports = {
    list: {
        "manage": {
            "prevId": "/start",
            "id": "manage",
            "title": "مدیریت",
            "icon": `👨‍💼`,
            textIcon () {return `${this.icon} ${this.title}`},
            "tags": [],
            "asButton": true,
            "body": ` به بخش مدیریت خوش آمدید 🌹
یکی از دستورات رو از طریق دکمه انتخاب کنید 👇`,
            "successText": ``,
            "helpText": ``,
            "postFunc": '',
            "nextId": "",
            "buttons": ["managePlan", "manageServer", "managePayment"]
        },
        "managePlan": {
            "prevId": "manage",
            "id": "managePlan",
            "title": "مدیریت پلن ها",
            "icon": `📦`,
            textIcon () {return `${this.icon} ${this.title}`},
            "tags": [],
            "asButton": true,
            "body": `📦 روی یک پلن ضربه بزنید یا دکمه ثبت جدید برای انتخاب کنید:`,
            "successText": ``,
            "helpText": ``,
            "postFunc": '',
            "firstCommand": true,
            "lastCommand": false,
            "nextId": "",
            "buttons": "Plan"
        },
        "newPlan": {
            "prevId": "managePlan",
            "id": "newPlan",
            "title": "ساخت پلن جدید",
            "icon": `📦 ➕`,
            textIcon () {return `${this.icon} ${this.title}`},
            "tags": [],
            "asButton": true,
            "body": `📦 ➕ یک پلن طبق الگوی زیر برای ثبت در سیستم ارسال کنید:

name: ${"نام نمایشی".replaceAll(" ", "_")}
totalPrice: ${"قیمت".replaceAll(" ", "_")} 
maxDays: ${"تعداد روز".replaceAll(" ", "_")} 
volume: ${"حجم به گیگ".replaceAll(" ", "_")}
`,
            "successText": ``,
            "helpText": `
توجه کنید فقط مقدار بعد از : رو تغییر بدید`,
            "postFunc": '',
            "firstCommand": true,
            "lastCommand": false,
            "nextId": "",
            "buttons": []
        },
        "manageServer": {
            "id": "manageServer",
            "title": "مدیریت سرورها",
            "icon": `💻`,
            textIcon () {return `${this.icon} ${this.title}`},
            "tags": [],
            "asButton": true,
            "body": ` به بخش مدیریت خوش آمدید 🌹
یکی از دستورات رو از طریق دکمه انتخاب کنید 👇`,
            "successText": ``,
            "helpText": ``,
            "postFunc": '',
            "firstCommand": true,
            "lastCommand": false,
            "nextId": "",
            "buttons": ["user.myConfig", "user.newOrder"]
        },
        "managePayment": {
            "id": "managePayment",
            "title": "مدیریت",
            "icon": `🦹‍`,
            textIcon () {return `${this.icon} ${this.title}`},
            "tags": [],
            "asButton": false,
            "body": ` به بخش مدیریت خوش آمدید 🌹
یکی از دستورات رو از طریق دکمه انتخاب کنید 👇`,
            "successText": ``,
            "helpText": ``,
            "postFunc": '',
            "firstCommand": true,
            "lastCommand": false,
            "nextId": "",
            "buttons": ["user.myConfig", "user.newOrder"]
        }
    },

    find(id) {
        return this.list[id]
    },

    findByIds(ids = [], filter, options = {}) {
        let result = ids.map(id => this.list[id]).filter(p => p).filter(filter) || [];

        return result;
    },

}




