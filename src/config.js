"use strict";

const config = {
    commands: {
        silentButton: "/silentButton",
        updateNewOrderButtons: "/updateNewOrderButtons"
    },
    bot: {
        name: "V2xBot",
        adminId: 76458757, // آیدی عددی باشه و داخل "" نباشه
        tlgSupport: "@YOUR_SUPPORT_USERNAME",
        token: "5973895087:AAHsCXItupz_FWcqOnmGRzIuA8TCyZiXjPg",
        webHook: '/endpoint',
        secret: "123456789wertyuiopxcvbnmDGHJKRTYIO", // A-Z, a-z, 0-9, _ and -
        welcomeMessage() {
            return `سلام به شما دوست گرامی! 🌟

به ربات ${config.bot.name} خوش آمدید! 🎉 از اینکه اینجا هستید، بسیار خوشحالیم.

ما اینجا هستیم تا به شما کمک کنیم و هر سوال یا درخواستی که دارید را رفع کنیم.

ممنون از شما که به ما پیوسته‌اید و امیدواریم که اینجا احساس خوبی داشته باشید. اگر هر سوال یا درخواستی دارید، لطفاً به ما بگوید. خوش آمدید! 🌺`
        }
    }
}


module.exports = config;
