const container = document.querySelector('.container')


const url = `https://api.kanye.rest/`

function perolas(){
    fetch(url).then(response=>{
        return response.json()
    }).then((dados) =>{
        
        container.innerHTML = `<p>${dados.quote}</p>`
    })
}

setInterval(perolas, 2000)