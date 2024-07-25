let conexiones = document.querySelector('.conexiones h2');
let solicitudes = document.querySelectorAll('.fa-circle-check')
let amigos = document.querySelectorAll('.solicitudes .amigo');
let solicitudAmistad = document.querySelector('.solicitudes h2');
let count = 500;
let count2 = 2;

//aplico each para recorrer todos los elementos
solicitudes.forEach(function(solicitud, index){
    solicitud.addEventListener('click', function(){
        //Elimino al amigo correspondiente usando el index
       amigos[index].remove();
        count++;
        count2--;
        conexiones.innerHTML = 'Tus Conexiones (' + count + ')';
        solicitudAmistad.innerHTML = 'Solicitudes de Conexión (' + count2 + ')';
    })
})