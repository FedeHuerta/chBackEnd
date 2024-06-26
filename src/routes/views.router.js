import express from 'express';
import { ProductManager } from '../dao/productManager.js';
import { Product } from '../dao/models/product.model.js';
import { Cart } from '../dao/models/cart.mode.js';

const router = express.Router();
const productManager = new ProductManager();
const currentCartId = '6647cdef564ecf01c5add630'; // Uso este ID de carrito para simular el agregado del cliente (Reemplazar por uno propio).

router.get('/', (req, res) => {
    res.render('index', {});
});

router.get('/home', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const products = await productManager.getProducts(page, limit);
        res.render('home', {
            products: products.docs,
            hasPrevPage: products.hasPrevPage,
            hasNextPage: products.hasNextPage,
            prevPage: products.prevPage,
            nextPage: products.nextPage
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los productos');
    }
});

router.get('/realtimeproducts', async (req, res) => {
    try {
        const productList = await productManager.getProducts();
        res.render('realTimeProducts', { products: productList });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los productos');
    }
});

router.get('/products', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const options = {
            page: parseInt(page, 10),
            limit: parseInt(limit, 10),
            lean: true
        };
        const products = await Product.paginate({}, options);
        res.render('products', { products, currentCartId });
    } catch (error) {
        console.error("Error al obtener productos:", error);
        res.status(500).send("Error al obtener productos");
    }
});

router.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id).lean();
        if (product) {
            res.render('productDetail', { product, currentCartId });
        } else {
            res.status(404).send("Producto no encontrado");
        }
    } catch (error) {
        console.error("Error al obtener el producto:", error);
        res.status(500).send("Error al obtener el producto");
    }
});

router.get('/carts/:cid', async (req, res) => {
    try {
        //Aca le aplico tambien la paginacion a la vista unica de un carrito
        const cartId = req.params.cid;
        const page = req.query.page || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

        const cart = await Cart.findById(cartId)
            .populate({
                path: 'products.productId',
                options: { limit, skip }
            })
            .lean();

        if (cart) {
            res.render('cart', { cart, page, currentCartId });
        } else {
            res.status(404).json({ error: 'Carrito no encontrado' });
        }
    } catch (error) {
        console.error("Error al obtener el carrito:", error);
        res.status(500).json({ error: 'Error al obtener el carrito' });
    }
});

export default router;
