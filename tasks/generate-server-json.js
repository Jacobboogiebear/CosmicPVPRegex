const fs = require('fs');
let dump = JSON.parse(fs.readFileSync('./regex/dump.json', 'utf-8'));

let exp = {
    general: {
        channelsEnabled: {
            value: false,
            name: "channelsEnabled"
        },
        pmEnabled: {
            value: false,
            name: "pmEnabled"
        },
        channelPattern: {
            value: "BRACKETS",
            name: "channelPattern"
        },
        messegePattern: {
            value: "DISABLED",
            name: "messegePattern"
        },
        useDefaultTab: {
            value: false,
            name: "useDefaultTab"
        },
        ignoredChannels: {
            value: [],
            name: "ignoredChannels"
        },
        defaultChannels: {
            value: [],
            name: "defaultChannels"
        }
    },
    filters: {
        value: [],
        name: "filters"
    },
    channels: {
        value: {},
        name: "channels"
    },
    pms: {
        value: {},
        name: "pms"
    }
};

let dchannels = [];
let channels = [];

for (let i in dump) {
    dchannels.push(dump[i]["channel"]);
}

dchannels.forEach(function(i, element) {
    if (channels.indexOf(i) == -1) {
        channels.push(i);
    }
});

for (let i in channels) {
    let channel = channels[i];
    exp["channels"]["value"][channel] = {
        name: channel,
        isPm: false,
        alias: channel,
        prefix: "",
        prefixHidden: false
    }
}

for (let i in dump) {
    let channel = dump[i]["channel"];
    let filter = dump[i]["regex"];
    exp["filters"]["value"].push({
        name: channel,
        settings: {
            channels: [
                channel
            ],
            remove: false,
            isDestinationPm: false,
            highlight: false,
            soundNotification: false,
            soundName: ""
        },
        pattern: filter,
        action: "Default"
    });
}

fs.writeFileSync("./regex/server.json", JSON.stringify(exp));