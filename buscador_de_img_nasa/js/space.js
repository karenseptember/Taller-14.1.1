
   
    let nasaAPI = "https://images-api.nasa.gov/search?q=";// api de la nasa
    let container = document.getElementById("contenedor");//  contenedor donde se insetara la informacion el json
    let busqueda = document.getElementById("inputBuscar");//variable  donde se escribira la palabra de busqueda
    let boton = document.getElementById("btnBuscar");// variable que contiene el boton de busqueda

       //Creacion del evento al hacer click en boton buscar se ejecute la funcion brindada
      boton.addEventListener("click",()=>{
      galaxiasInfo(busqueda.value);//la funcion se le brinda el argumento que contiene el valor de la variable busqueda
      });


    function galaxiasInfo(busqueda){//funcion que realiza el fetch trae la informacion del json de la nasa 
    fetch(nasaAPI+busqueda)//se concatena con el valor de la palabra busqueda
    .then((response)=>response.json())
    .then((array)=>{
        mostrarInfo(array.collection.items);// nos brinda los datos, que en este caso digitamos hasta items ya que apartir de ahi nos brinda los datos
                                            //que se solicitan mas adelante
    })}


    function mostrarInfo(array){//funcion que realiza el recorrido del arreglo junto con la presentacion 
     container.innerHTML = ''; //El contenedor vacio cada vez que haga una busqueda para que se pueda insertar 
    for (let img of array){//recorrido del arreglo
        container.innerHTML+=// Formato que se le brinda a la informacion obtenida, para este caso cartas.
  `<div class= "col-lg-4 col-md-3"> 
  <div class=" card" >
    <img src="${img.links[0].href}" class="card-img-top">
     <div class="card-body">
      <h5 class="card-title">${img.data[0].title}</h5>
      <p class="card-text">${img.data[0].description}</p> 
      <p><small class="text-body-secondary">${img.data[0].date_created}</small></p>
     </div>
    </div>`
  }}







