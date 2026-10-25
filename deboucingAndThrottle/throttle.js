function throttle(fn , delay){
    let lastCall = 0;
    return function(...arg){
        const now = Date.now();
        if(now - lastCall < delay){
            return;
        }

        lastCall = now;
        return fn(...arg);
    };
}





const sendMessage = (message) => {
    console.log(message);
}

const sendChatMessageWithThrottle = throttle(sendMessage , 2 * 1000);

// sendChatMessageWithThrottle("Hi");
sendChatMessageWithThrottle("Hello");























function throttling(fn,delay){
    let lastCall = 0;
    return function(...param){
        const now = Date.now();
        if(now - lastCall < delay){
            return;
        }
        lastCall = now;
        return fn(param);

    }
}