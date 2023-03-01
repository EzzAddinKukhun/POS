const mysql = require('mysql');
const express = require('express');
let app = express();
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
app.use(express.static(__dirname + '/CategoriesImgs'));
app.use(express.static(__dirname + '/imgs'));
app.use(express.static(__dirname + '/ProductsImgs'));

const path = require('path');
const formidable = require('formidable');
app.use(cors())
app.use(express.json({ limit: '1mb' }))


let mysqlConnection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'pos'
    }
);
mysqlConnection.connect((err) => {
    if (!err) {
        console.log("CONNECTION SUCCESS")

    }
    else {
        console.log("CONNECTION FAILED")
        console.log(err)
    }
});


const storage = multer.diskStorage({

    destination: (req, file, callback) => {
        return callback(null, __dirname + "/CategoriesImgs")
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})


const upload = multer({
    storage: storage
})



// UPLOAD PRODUCTS FILE IMAGE
const productsImgStorage = multer.diskStorage({

    destination: (req, file, callback) => {
        return callback(null, __dirname + "/ProductsImgs")
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const uploadProductImg = multer({
    storage: productsImgStorage
})




app.listen('5000', () => {
    console.log("express is running at 5000")
});




app.post('/addNewCategory', upload.single('file'), (req, res) => {
    let categoryName = req.body.name;
    let fileName = req.file.filename;
    let insertQuery = "insert into categories (`categoryId`,`categoryName`,`categoryImg`,`productsNumber`) VALUES (?)";
    let values = [0, categoryName, fileName, 0];
    mysqlConnection.query(insertQuery, [values], (err) => {
        if (err) {
            console.log(err);
        }
        return res.json({
            message: 'success'
        });
    })

})



app.get('/Categories', (req, res) => {
    mysqlConnection.query('SELECT * FROM categories', (err, rows, fileds) => {
        if (!err) {
            return (res.json(rows));
        }
        else {
            console.log(err);
        }
    })
})


app.delete('/deleteCategory/:id', (req, res) => {

    let deleteQuery = "DELETE FROM categories where categoryId = ?";
    let categoryId = req.params.id;

    mysqlConnection.query(`SELECT categoryImg FROM categories where categoryId='${req.params.id}'`, (err, rows, fileds) => {
        if (!err) {
            let oldImgName = rows[0].categoryImg;
            let imagePath = __dirname + '/CategoriesImgs/' + oldImgName;
            fs.unlinkSync(imagePath);
            mysqlConnection.query(deleteQuery, [categoryId], (err) => {
                if (err) {
                    console.log(err);
                }
                return res.json({
                    message: 'success'
                });
            })
        }
        else {
            console.log(err);
        }
    })


})

app.put('/updateCategory/:id', upload.single('file'), (req, res) => {
    let categoryName = req.body.name;
    let fileName;
    let updateQuery;

    if (req.file == undefined) {
        updateQuery = `UPDATE categories SET categoryName='${categoryName}'  where categoryId = ?`;
    }
    else {
        fileName = req.file.filename;
        updateQuery = `UPDATE categories SET categoryImg='${fileName}', categoryName='${categoryName}'  where categoryId = ?`;
    }

    mysqlConnection.query(`SELECT categoryImg FROM categories where categoryId='${req.params.id}'`, (err, rows, fileds) => {
        if (!err) {
            if (req.file != undefined) {
                let oldImgName = rows[0].categoryImg;
                let imagePath = __dirname + '/CategoriesImgs/' + oldImgName;
                fs.unlinkSync(imagePath);
            }
            mysqlConnection.query(updateQuery, [req.params.id], (err) => {
                if (err) {
                    console.log(err);
                }
                return res.json({
                    message: 'success'
                });
            })
        }
        else {
            console.log(err);
        }
    })

})



//PRODUCTS ADD/UPDATE/GET/DELETE CRUD
app.post('/addNewProduct', uploadProductImg.single('file'), (req, res) => {

    let productName = req.body.productName;
    let productCode = req.body.productCode;
    let productCategory = req.body.productCategory;
    let productQuantity = req.body.productQuantity;
    let productCost = req.body.productCost;
    let productPrice = req.body.productPrice;
    let productDesc = req.body.productDesc;

    if (req.file == undefined) {
        return res.json({
            message: 'no file uploaded'
        });

    }
    else {
        let productImg = req.file.filename;
        let insertQuery = "insert into products (`id`,`productName`,`productCode`,`productCategory`,`productQuantity`,`productCost`,`productPrice`,`productDescription`,`productImg`) VALUES (?)";
        let values = [0, productName, productCode, productCategory, productQuantity, productCost, productPrice, productDesc, productImg];
        mysqlConnection.query(insertQuery, [values], (err) => {
        if (err) {
            console.log(err)
            return res.json({
                message: 'error'
            });
        }
        return res.json({
            message: 'success'
        });
    })
    }


})

app.get('/Products', (req, res) => {
    mysqlConnection.query('SELECT * FROM products', (err, rows, fileds) => {
        if (!err) {
            return (res.json(rows));
        }
        else {
            console.log(err);
        }
    })
})

app.delete('/deleteProduct/:id', (req, res) => {

    let deleteQuery = "DELETE FROM products where id = ?";
    let productId = req.params.id;

    mysqlConnection.query(`SELECT productImg FROM products where id='${req.params.id}'`, (err, rows, fileds) => {
        if (!err) {
            let oldImgName = rows[0].productImg;
            let imagePath = __dirname + '/ProductsImgs/' + oldImgName;
            fs.unlinkSync(imagePath);
            mysqlConnection.query(deleteQuery, [productId], (err) => {
                if (err) {
                    console.log(err);
                }
                return res.json({
                    message: 'success'
                });
            })
        }
        else {
            console.log(err);
        }
    })


})

