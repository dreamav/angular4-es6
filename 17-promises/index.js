// http://date.jsontest.com/

// function oldDelay(ms, func) {
//     setTimeout(function () {
//         func()
//     }, ms)
// }

function delay(ms = 1000) {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve()
        }, ms)
    })
}

delay(3000)