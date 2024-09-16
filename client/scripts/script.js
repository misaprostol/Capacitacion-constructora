
document.querySelector("#formulario").addEventListener("submit",async function(e){
    e.preventDefault();
    const codigo=document.querySelector("#codigoCredencial").value;
    const nombre=document.querySelector("#nombre").value;
    const apellido=document.querySelector("#apellido").value;
    const sede=document.querySelector("#sede").value;
    let datos;
    await fetch(`http://localhost:3000/usuarios/${codigo}`,{
        method:'GET'
    })
    .then(data=>{
        datos=data.json();
    })
})