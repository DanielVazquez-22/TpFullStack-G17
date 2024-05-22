document.getElementById('jsonBtn').addEventListener('click', cargarJSON());

function cargarJSON(id) {
    fetch('./static/js/detail.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let html = '';
        data.forEach(function(anime){
            html += `
            <div id="${anime.id}" class="card-json">
            <h3>${anime.title}</h3>
            <p>${anime.description}</p>
            <h4>${anime.status}</h4>
            <iframe src=${anime.trailer} max-width=100%; aspect-ratio=16/9 width='560' height='315' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>
            </div>
            `;
            })
            document.getElementById('resultado').innerHTML = html;
})
.catch(function(error){
    console.log(error);
    })
}