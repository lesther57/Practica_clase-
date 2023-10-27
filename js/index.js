const listaSuper = document.getElementById("lista-super");
const input = document.getElementById("input-lista");
const botonAgregar = document.getElementById("boton-agregar");

botonAgregar.addEventListener("click", onClickAdd);
input.addEventListener("input", onTypeList);

function onClickAdd() {
    const li = createListItem(input.value);
    listaSuper.appendChild(li);
    input.value = "";
    botonAgregar.disabled = true;
    guardar(); // Llamamos a la función guardar() después de agregar un elemento.
}

function onTypeList() {
    botonAgregar.disabled = input.value.length === 0;
}

function guardar() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto Agregado Con Éxito',
        showConfirmButton: false,
        timer: 1500
    });
}

function createListItem(name) {
    const listItem = document.createElement("li");
    const heading = document.createElement("span");
    heading.textContent = name;
    const botonEliminar = document.createElement("button");

    listItem.classList.add("lista-item");
    botonEliminar.textContent = "x";
    botonEliminar.classList.add("boton-eliminar"); // Agregamos una clase en lugar de un id
    botonEliminar.addEventListener("click", onClickDelete);

    listItem.appendChild(heading);
    listItem.appendChild(botonEliminar);

    return listItem;
}

function onClickDelete() {
    this.parentNode.remove();
}