
function doSomethingInEventLoop(callback) {
    let i = 0;
    setInterval(() => callback('Task completed #'+ i++), 2000);
}

doSomethingInEventLoop((data) => {
    console.log(data);
});