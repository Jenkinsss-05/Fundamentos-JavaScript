const empleados = {
  "109110338": {
    foto: "https://i.pinimg.com/736x/dc/47/63/dc4763053fa7eb5c950182a6eeffe673.jpg",
    descripcion: "Patricio Sardelli // 32 años // contador"
  },
  "209110338": {
    foto: "https://th.bing.com/th/id/OIP.HY3Ex5MAg1KLeTYC2cikGAAAAA?w=467&h=700&rs=1&pid=ImgDetMain",
    descripcion: "Ariana Grande // 25 años // sub gerente"
  },
  "309110338": {
    foto: "https://i1.sndcdn.com/artworks-xel5eeSqGOguacDu-7XeXMA-t500x500.jpg",
    descripcion: " Ignacio Santos // 48 años // Visepresidente"
  },
  "409110338": {
    foto: "https://th.bing.com/th/id/R.fac49de63182e5dba6bd5cf7b4fa1045?rik=xhcP4Zf%2bgOLLgg&riu=http%3a%2f%2fstaraufeminin.e-monsite.com%2fmedias%2fimages%2fcindy-lauper.jpg&ehk=GKNrvvpf6TqlzKHRLUGvzckl4JPq%2f1fyjwgHRHRjmrA%3d&risl=&pid=ImgRaw&r=0",
    descripcion: "Cindy Louper // 27 años // secretaria presidencial"
  },
  "509110338": {
    foto: "https://th.bing.com/th/id/OIP.aaejTql5AV7GANu7CuH01QHaJe?rs=1&pid=ImgDetMain",
    descripcion: "Steve Perry // 31 años // lider de seguridad"
  }
};
//AQUI SE BUSCA LA EL EMPLEADO
function buscarEmpleado(cedula) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (empleados[cedula]) {
    const empleado = empleados[cedula];
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = empleado.foto;
    img.alt = "Foto del empleado";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const descripcion = document.createElement("p");
    descripcion.textContent = empleado.descripcion;

    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(descripcion);
    resultDiv.appendChild(card);
  } else {
    const mensaje = document.createElement("p");
    mensaje.textContent = "El usuario NO existe.";
    resultDiv.appendChild(mensaje);
  }
}

document.getElementById("searchInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    const cedula = event.target.value.trim();
    buscarEmpleado(cedula);
  }
});
