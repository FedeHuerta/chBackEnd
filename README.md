# Gestor de Productos y Carritos

## Descripción

Esta aplicación es un sistema de gestión de productos y carritos utilizando Node.js con Express. Permite realizar operaciones CRUD sobre productos y carritos, utilizando archivos JSON para almacenar los datos de manera persistente.

## Uso

1. Iniciar el servidor con el comando `npm start` desde la carpeta raíz.
2. Utilizar Postman u otra herramienta similar para interactuar con la API.
3. Acceder a `localhost:8080/api/products` para gestionar productos y a `localhost:8080/api/carts` para gestionar carritos.
4. Agregar tu primer producto utilizando el método `POST` para crear el archivo `products.json`
5. Crear tu primer carrito utilizando el metodo `POST` para crear el archivo `carts.json`

## Endpoints

### Productos

- **GET /api/products**: Obtiene la lista de productos. Puedes usar `?limit=` para filtrar por la cantidad de productos que quieras ver en lista.
- **GET /api/products/:pid**: Obtiene un producto por su ID.
- **POST /api/products**: Crea un nuevo producto.
- **PUT /api/products/:pid**: Actualiza cualquier atributo de un producto existente por su ID.
- **DELETE /api/products/:pid**: Elimina un producto por su ID.

### Carritos

- **POST /api/carts**: Crea un nuevo carrito.
- **GET /api/carts/:cid**: Obtiene un carrito por su ID.
- **POST /api/carts/:cid/product/:pid**: Agrega un producto a un carrito existente.

## Ejemplo de Uso

### Guardar un producto
- POST localhost:8080/api/products
```json
{
  "title": "Producto de Prueba 1",
  "description": "Descripción del producto",
  "price": 99.99,
  "thumbnail": "https://ejemplo.com/imagen.jpg",
  "code": "ABC123",
  "stock": 10,
  "status": true,
  "category": "Categoria 1"
}
```

