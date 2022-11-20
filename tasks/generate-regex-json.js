const fs = require('fs');
let regexlist = JSON.parse(fs.readFileSync("./regex/list.json"));

let generated_regexs = [];

for (let i in regexlist) {
    let selected = regexlist[i];
    let folder = selected["folder"];
    let channel = selected["channel"];
    let format = fs.readdirSync(`./regex/${folder}/`);
    let generated = "";
    for (let j in format) {
        let reg = fs.readFileSync(`./regex/${folder}/${format[j]}`, 'utf-8');
        if (j == (format.length - 1)) {
            generated += `${reg}`
        } else {
            generated += `${reg}|`
        }
    }
    generated = `(${generated})`;
    generated_regexs.push({
        regex: generated,
        channel: channel
    });
}

if (fs.existsSync('./regex/dump.json')) {
    fs.unlinkSync('./regex/dump.json');
}
fs.writeFileSync('./regex/dump.json', JSON.stringify(generated_regexs));