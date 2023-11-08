const socials = ['Twitter', 'LinkedIn', 'insta', 'tiktok']

//console.log(socials.__proto__);

// socials.forEach(function(item){
//     console.log(item);
// })

//socials.forEach((item, index, arr)=> console.log(`${index} - ${item} ${arr}`))

function logsocials(social){
    console.log(social);
}

socials.forEach(logsocials)

const socialob = [
    {name: 'bard', url: 'bard.google.com'},
    {name: 'chatgpt', url: 'openai.com'},
    {name: 'sarufi', url: 'sarufi.io'}
]

console.log('List of AIs');
socialob.forEach((item) => console.log(item.url))