"use strict";

const config = {
    commands: {
        silentButton: "/silentButton",
        updateNewOrderButtons: "/updateNewOrderButtons"
    },
    bot: {
        name: "V2xBot",
        adminId: 11111111, // آیدی عددی باشه و داخل "" نباشه
        tlgSupport: "@YOUR_SUPPORT_USERNAME",
        token: "YOUR_BOT_TOKEN",
        webHook: '/endpoint',
        secret: "123456789wertyuiopxcvbnmDGHJKRTYIO", // A-Z, a-z, 0-9, _ and -
        welcomeMessage() {
            return `سلام به شما دوست گرامی! 🌟

به ربات V2xBot خوش آمدید! 🎉 از اینکه اینجا هستید، بسیار خوشحالیم.

ما اینجا هستیم تا به شما کمک کنیم و هر سوال یا درخواستی که دارید را رفع کنیم.

ممنون از شما که به ما پیوسته‌اید و امیدواریم که اینجا احساس خوبی داشته باشید. اگر هر سوال یا درخواستی دارید، لطفاً به ما بگوید. خوش آمدید! 🌺`
        }
    }
}


module.exports = config;
