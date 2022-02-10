const fs = require("fs");
const total_ev = [];// is a array

module.exports = async (client) => {
    try {
        let amount = 0;
        const load_dir = (dir) => {
            const event_files = fs.readdirSync(`./events/${dir}`).filter((file) => file.endsWith(".js"));
            for (const file of event_files) {
                try {
                    const event = require(`../events/${dir}/${file}`)
                    let eventName = file.split(".")[0];
                    total_ev.push(eventName)
                    client.on(eventName, event.bind(null, client));
                    amount++;
                } catch(e){
                    console.log(`\n`)
                    console.log(`====EVENT HANDLER ERROR====`.red)
                    console.log(e)
                    console.log(`====EVENT HANDLER ERROR====`.red)
                    console.log(`\n`)
                }
            }
        }
        await ["client", "guild"].forEach(e => load_dir(e));
        console.log(`\n`);
        console.log(`====EVENT HANDLER====`.green)
        console.log(`EVENT HANDLER ::: ${amount} EVENTS LOADED`.bgGreen)
        console.log(`\n`)
    } catch(e) {
        console.log(`\n`)
        console.log(`====EVENT HANDLER ERROR====`.red)
        console.log(e)
        console.log(`====EVENT HANDLER ERROR====`.red)
        console.log(`\n`)
    }
}