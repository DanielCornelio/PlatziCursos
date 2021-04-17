const fs = require('fs');

function getKeysFromOptions(options) {
    const { settings, _locals, ...objectKeys } = options;

    return Object.keys(objectKeys);
}

function getRenderedContent(content, options) {
    const keys = getKeysFromOptions(options);
    let contentString = content.toString();

    for (let key of keys) {
        contentString = contentString.replace(
            new RegExp(`\{${key}\}`, "gi"),
            options[key]
        );
    }

    return contentString;
}

function expressJsx(filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
        if (err) {
            callback(err);
        }

        const rendered = getRenderedContent(content, options);

        console.log(rendered);
        return callback(null, rendered);
    });
}

module.exports = expressJsx;