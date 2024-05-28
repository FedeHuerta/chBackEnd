# PRODUCTOS ENDPOINTS

## TODAS LAS PRUEBAS FUERON REALIZADAS CON "NPM START"

### GET
- **URL**: localhost:8080/api/products
- **Esperado**: Devuelve los primeros 10 productos de la página 1 sin orden específico y con el objeto de respuesta en el formato solicitado.

### POST
- **URL**: localhost:8080/api/products
- **Esperado**: Agrega un producto nuevo
```json
{
    "title": "{{$randomProductName}}",
    "description": "{{$randomProductAdjective}}",
    "price": {{$randomPrice}},
    "thumbnail": "https://ejemplo.com/imagen.jpg",
    "code": "{{$randomAlphaNumeric}}",
    "stock": 5,
    "status": true,
    "category": "{{$randomProductMaterial}}"
}
```

### PUT
- **URL**: localhost:8080/api/products/:pid
- **Esperado**: Actualiza los datos de un producto
```json
{
    "title": "Producto actualizado anachi",
    "description": "Descripción del producto",
    "price": 25,
    "thumbnail": "https://ejemplo.com/imagen.jpg",
    "code": "ABC111",
    "stock": 10,
    "status": true,
    "category": "electrónica"
}
```

### Parámetros de búsqueda

- Con limit y page:
  - **URL**: localhost:8080/api/products?limit=5&page=2
  - **Esperado**: Devuelve 5 productos de la página 2 con el objeto de respuesta en el formato solicitado.

- Con sort:
  - **URL**: localhost:8080/api/products?sort=asc
  - **Esperado**: Devuelve los productos ordenados por precio de forma ascendente con el objeto de respuesta en el formato solicitado.

- Con query:
  - **URL**: localhost:8080/api/products?query=Plastic
  - **Esperado**: Devuelve productos que pertenecen a la categoría "Plastic" con el objeto de respuesta en el formato solicitado.

- Con availability:
  - **URL**: localhost:8080/api/products?availability=true
  - **Esperado**: Devuelve productos disponibles (status: true) con el objeto de respuesta en el formato solicitado.

---

# CARRITOS ENDPOINTS

### GET
- **URL**: localhost:8080/api/carts/:cid
- **Esperado**: Devuelve el carrito completo con sus productos

### POST
- **URL**: localhost:8080/api/carts/
- **Esperado**: Crea un nuevo carrito

### POST
- **URL**: localhost:8080/api/carts/:cid/product/:pid
- **Esperado**: Agrega un producto por específico a un carrito específico
```json
{
    "quantity": 7 (o las que quieras)
}
```

### PUT
- **URL**: localhost:8080/api/carts/:cid/products/:pid
- **Esperado**: Actualiza la cantidad de un producto específico en un carrito específico
```json
{
    "quantity": 7 (o las que quieras)
}
```

### DEL
- **URL**: localhost:8080/api/carts/:cid/products/:pid
- **Esperado**: Elimina un producto específico de un carrito específico

### DEL
- **URL**: localhost:8080/api/carts/:cid
- **Esperado**: Elimina todos los productos de un carrito específico

---

# VIEWS:

- **http://localhost:8080/products**
  - Muestra una lista de todos los productos con paginación

- **http://localhost:8080/products/:pid**
  - Muestra a detalle un producto específico

- **http://localhost:8080/carts/:cid**
  - Muestra los productos dentro de un carrito específico con paginación

