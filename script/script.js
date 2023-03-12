// Alumno: Matias Sotelo 42.097.348 Comision: 51110

// Objetivo: Gestionar productos.
    // Array: productos[] y productosEliminados[];
    // OBJETO: producto -> define los campos del objeto, permite calcularGanancia() y calcularDisponibilidad();
    // menuProductos() -> Visualiza la funcionalizad de nuestro programa. 
    // mostrarProductos() -> Muestra el listado de los productos.
    // agregarProducto() -> Agrega un nuevo productos con los campos: nombre, costo, precio, stock.
    // modificarProducto() -> ver productos, buscar con id un producto y modificarlo.
    // eliminarProducto() -> ver productos, eliminarUltimoElemento(), eliminarId(), 
                        //-> mostrarProductosEliminados() muestra productos eliminados. 

const productos = [];
const productosEliminados = [];

let ultimoId = -1;

class Producto {
    constructor(nombre, costo, precio, stock) {
        this.id = this.obtenerId();
        this.nombre = nombre.toUpperCase(); 
        this.costo = parseFloat(costo);
        this.precio = parseFloat(precio); 
        this.ganancia = this.calcularGanancia(costo,precio);
        this.stock = parseInt(stock);
        this.disponible = this.calcularDisponibilidad(stock);
    }
    calcularGanancia(costo, precio) {
        let ganancia; 
        ganancia = precio - costo;
        return parseFloat(ganancia);
    }
    calcularDisponibilidad(stock) {
        let disponible;
        if ( stock >= 1 ) {
            return disponible = true
        } else {
            return disponible = false;
        }
    }
    obtenerId() {
        ultimoId++;
        return ultimoId;
    }
}

// Ejemplo de Articulos
productos.push(new Producto("reloj tressa 0", 500, 900, 0));
productos.push(new Producto("reloj tressa 1", 500, 800, 2));
productos.push(new Producto("reloj tressa 2", 500, 700, 0));
productos.push(new Producto("reloj tressa 3", 550, 900, 3));
productos.push(new Producto("reloj tressa 4", 200, 800, 2));
productos.push(new Producto("reloj tressa 5", 270, 700, 0));

const menuProductos = () => {
    let opcion = parseInt(prompt("INVENTARIO\n1-Ver productos\n\nPRODUCTOS\n2-Agregar\n3-Modificar\n4-Eliminar\n\n0-Salir"));
    switch(opcion) {
        case 1:
            mostrarProductos(); 
            menuProductos();
            break;
        case 2: 
            agregarProducto();
            menuProductos();
            break;
        case 3: 
            modificarProducto();
            menuProductos();
            break;    
        case 4: 
            eliminarProducto();
            menuProductos();
            break;
        case 0: 
            break;
    }
}

const mostrarProductos = () => {
    let productosInfo = "";
    productos.forEach((productos)=> {
        productosInfo += `Nombre: ${productos.nombre}\nID: ${productos.id}\nCosto: $${productos.costo}\nPrecio: $${productos.precio}\nGanancia: $${productos.ganancia}\nStock: ${productos.stock}\nDisponible: ${productos.disponible}\n\n`;
    });
    alert(productosInfo);
}

const agregarProducto = () => {
    let nombre = prompt("Ingrese nombre");
    let costo = prompt("Ingrese costo");
    let precio = prompt("Ingrese precio");
    let stock = prompt("Ingrese stock");

    productos.push(new Producto(nombre,costo,precio,stock));
}

const modificarProducto = () => {
    let idProducto = parseInt(prompt("Para ver los productos ingrese -1\nid del producto"));



       
    if (idProducto == -1) {
        mostrarProductos();
        modificarProducto();
    }
    let modificar = parseInt(prompt((`¿Que desea modificar?\nId del producto: ${productos[idProducto].id}\n1-Nombre: ${productos[idProducto].nombre}\n2-Costo: $${productos[idProducto].costo}\n3-Precio: $${productos[idProducto].precio}\n4-Stock: ${productos[idProducto].stock}`)));
    
    switch(modificar) {
        case 1:
            let nombre = prompt("Nuevo Nombre:");
            productos[idProducto].nombre = nombre;
        break;
        case 2:
            cambiarCosto(idProducto);
        break;
        case 3:
            cambiarPrecio(idProducto);
        break;
        case 4:
            cambiarStock(idProducto);
        break;
        default: 
            modificarProducto();
        break;
    }

}
const cambiarCosto = (idProducto) => {
    let costo = parseFloat(prompt("Nuevo Costo:"));
    let precio = productos[idProducto].precio;
    
    productos[idProducto].costo = costo;
    
    productos[idProducto].ganancia = productos[idProducto].calcularGanancia(costo,precio);
}

const cambiarPrecio = (idProducto) => {
    let precio = parseFloat(prompt("Nuevo Precio:"));
    let costo = productos[idProducto].costo;
    
    productos[idProducto].precio = precio;
    
    productos[idProducto].ganancia = productos[idProducto].calcularGanancia(costo,precio);
}

const cambiarStock = (idProducto) => {
    let stock = parseInt(prompt("Actualizar stock:"));

    productos[idProducto].stock = stock;
    productos[idProducto].disponible = productos[idProducto].calcularDisponibilidad(stock);
}

const eliminarProducto = () => {
    let opcion = prompt("Eliminar productos\n1-Ver productos\n2-Eliminar ultimo\n3-Eliminar ID\n\n4-Ver productos eliminados");
    if (opcion == 1) {
        mostrarProductos();
        eliminarProducto();
    } else if ( opcion == 2) {
        eliminarUltimoElemento();
    } else if ( opcion == 3) {
        eliminarId();
    } else if ( opcion == 4) {
        mostrarProductosEliminados();
    }
}

const eliminarUltimoElemento = () => {
    productosEliminados.push(productos.pop());
}

function eliminarId() {
    let id = prompt("Ingrese id del producto");
    let eliminar = parseInt(prompt(`ID Producto: ${productos[id].id}\nNombre: ${productos[id].nombre}\nCosto: $${productos[id].costo}\nPrecio: $${productos[id].precio}\nStock: ${productos[id].stock}\nEliminar? 1-No 2-Si`));

    if(eliminar == 1) {
        eliminarProducto();
    } else if (eliminar == 2) {
        productosEliminados.push(productos[id]);
        productos.splice(id,1);
        alert(`Producto id: ${id} eliminado!`);
    }
    
}

const mostrarProductosEliminados = () => {
    if (productosEliminados[0] == undefined ) {1
        alert("No hay elementos eliminados");
    } else {
        let productosInfo = "";
        productosEliminados.forEach((productos)=> {
            productosInfo += `Marca: ${productos.nombre}\nID: ${productos.id}\nCosto: $${productos.costo}\nPrecio: $${productos.precio}\nGanancia: $${productos.ganancia}\nStock: ${productos.stock}\nDisponible: ${productos.disponible}\n\n`;
        });
        alert(productosInfo);
    }
}

menuProductos();

