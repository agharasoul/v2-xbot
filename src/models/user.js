'use strict';

const Config = require('../config');

module.exports = {
    meta: {
        command: {}
    },

    getNewOrderButtons(chatId, id) {
        return [
            [
                {text: "✅  تایید", callback_data: `confirm_order;${chatId};${id}`},
                {text: "❌ رد درخواست", callback_data: `reject_order;${chatId};${id}`}
            ]
        ];
    },

    newAccountText(plan, userUrl, config) {
        let {tlgSupport} = config.bot;
        let {name: planName, maxDays, volume} = plan;

        let result = `😍 سفارش شما تائید شد

📦 نام بسته:${planName}

🎚حجم بسته:${volume} گیگ

⏳ زمان:${maxDays} روز


برای مشاهده جزئیات لینک زیر رو باز کنید:
${userUrl}

درصورت بروز هرگونه مشکل با پشتیبانی تماس بگیرید:
${tlgSupport}

`;

        return result;
    }
}




