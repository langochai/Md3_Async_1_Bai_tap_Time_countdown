function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function countDown(i) {
    while (i > 0) {
        document.getElementById('done').innerHTML = i;
        i--;
        await sleep(1000);
    }
    return "counter finished:";
}

let starts =() => {
    let number = document.getElementById('countdown').value
    let counter = countDown(number);
    counter.then((msg) => {
        document.getElementById('done').innerHTML = msg
    });
}