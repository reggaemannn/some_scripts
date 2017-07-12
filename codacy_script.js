/*
 curl -X POST --header "Content-Type: application/json" --header "Accept: application/json"
 --header "api_token: U8ZFqvb83rN9NijzDdS5" -d '{"url": "https://github.com/matolaypal/playground"}'
 "https://api.codacy.com/2.0/project/create/public"
 */


var script = document.createElement("script");
script.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js");
script.addEventListener('load', function() {
    var script = document.createElement("script");
    document.body.appendChild(script);
}, false);
document.body.appendChild(script);

//$(document).ready(function () {
    $.ajax({
        url: "https://api.codacy.com/2.0/project/list?api_token=U8ZFqvb83rN9NijzDdS5",
        type: "GET",
        // headers: {
        //     "api_token": "U8ZFqvb83rN9NijzDdS5"
        // },
        dataType: 'jsonp',
        contentType: 'application/javascript',
        processData: false,
        data: JSON.stringify({})
    //         "registration_ids": [
    //             "dWvRQjY01Uw:APA91bESY0_Zl-WBY9mXH3x8_Ul0eZgvncvSX_hf0chY1RmHJqumzHiHAdGmSE7SOvjirP9tOoJbceLUtXbKLMRkRbWHcjAWEU68CysLv4_Cui6uHGIIW8Hvnpd4OFNbfto-HV1"
    //         ]
    //     })
    })
        .done(function() {
            console.log("succes");
        })
        .fail(function() {
            console.log("fail");
        });
//});