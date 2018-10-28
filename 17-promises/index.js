// http://date.jsontest.com/

// npm i -S jquery@1.9

import $ from "jquery"

let promise = new Promise((resolve,reject)=>{
    $.ajax({
        url: "http://datte.jsontest.com/",
        dataType: "json",
        success: response => {
            resolve(response)
        },
        error: error => {
            reject(error)
        }
    })
})

promise
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.info(error)
    })