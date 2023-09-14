'use strict';

export default {
    seed: {
        cmd: 'select_plans',
        name: 'seed servers',
        data: [
            {
                model: {
                    "id": 1,
                    "title": "🇩🇪 Germany",
                    "remark": "Germany",
                    "url": "https://exmaple.workder.dev/xxxxxxxxxxx/yyyyyyyyy/admin/",
                }
            },
            {
                model: {
                    "id": 2,
                    "title": "🇩🇪 Germany2",
                    "remark": "Germany2",
                    "url": "https://exmaple.workder.dev/xxxxxxxxxxx/yyyyyyyyy/admin/",
                }
            }
        ],
    },

    getButtons(nextCmd: string, addBackButton = true): any[][] {
        let result: any[][] = [];
        let data = this.seed.data.map(p => {
            return {text: p.model.title, callback_data: nextCmd}
        })
        // data.push({text: "برگشت ↩️", callback_data: "/start"})

        // result.push(data)
        result.push([{text: "برگشت ↩️", callback_data: "/start"}])

        return result;
    }
}
