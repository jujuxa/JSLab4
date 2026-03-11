// Àñèíõðîííûå ôóíêöèè
function readConfig(name, callback) {
    setTimeout(() => {
        console.log('(1) config from ' + name + ' loaded')
        callback()
    }, Math.floor(Math.random() * 1000))
}
function doQuery(statement, callback) {
    setTimeout(() => {
        console.log('(2) SQL query executed: ' + statement)
        callback()
    }, Math.floor(Math.random() * 1000))
}
function httpGet(url, callback) {
    setTimeout(() => {
        console.log('(3) Page retrieved: ' + url)
        callback()
    }, Math.floor(Math.random() * 1000))
}
function readFile(path, callback) {
    setTimeout(() => {
        console.log('(4) Readme file from ' + path + ' loaded')
        callback()
    }, Math.floor(Math.random() * 1000))
}
function callback() {
    console.log('It is done!')
}

//ÂÀÐÈÀÍÒ À
console.log('start');
readConfig('myConfig', () => {
    doQuery('select * from cities', () => {
        httpGet('http://google.com', () => {
            readFile('README.md', () => {
                callback();
                console.log('end');
            });
        });
    });
});

//ÂÀÐÈÀÍÒ Á
console.log('start');
function step1() {
    readConfig('myConfig', step2);
}
function step2() {
    doQuery('select * from cities', step3);
}
function step3() {
    httpGet('http://google.com', step4);
}
function step4() {
    readFile('README.md', () => {
        callback();
        console.log('end');
    });
}

step1();