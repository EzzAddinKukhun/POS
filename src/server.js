const mysql = require('mysql');
const express = require('express');
let app = express();
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
app.use(express.static(__dirname + '/CategoriesImgs'));
app.use(express.static(__dirname + '/imgs'));

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

