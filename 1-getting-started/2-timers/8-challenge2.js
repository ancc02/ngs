let counter = 0;
const interval = setInterval(() => {
    console.log('hello every 1 second');
    counter++;
    if (counter > 4) {
        console.log('done');
        clearInterval(interval);
    }
}, 1000);
