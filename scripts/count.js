//Log a countdown from 100, countdown should stop at 0 and print a message


function countdown(count) {
    console.log(count);

    if (count > 0) {
        setTimeout(() => {
            countdown(count - 1);
        }, 1000);
    } else {
        console.log("Countdown complete!");
    }
}

countdown(100);
