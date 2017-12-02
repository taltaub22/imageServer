const express = require("express");
const path = require('path');
const fs = require('fs');
const glob = require("glob");
const multer = require('multer');
const upload = multer({dest: 'temp/'});

var app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/:imgName', function (req, res) {
    let imageFullName = glob.sync(req.params.imgName + ".*", {cwd: `${__dirname}/images`}).pop();
    if (imageFullName) {
        let imgPath = path.join(__dirname, '/images', imageFullName);
        res.sendFile(imgPath);
    } else {
        console.log(req.params.imgName + " not found");
        res.sendStatus(404);
    }
});

app.post('/upload/:imgName', upload.any(), function (req, res) {

    if (!req.files) {
        res.sendStatus(400);
    }

    let newFile = req.files[0];
    let oldImageFullName = glob.sync(req.params.imgName + ".*", {cwd: `${__dirname}/images`}).pop();
    let oldImgPath = path.join(__dirname, '/images', oldImageFullName);

    let fileName = newFile.filename;
    let oldPath = path.join(newFile.destination, fileName);
    let newFileExtension = newFile.originalname.split('.').pop();
    let newPath = path.join(__dirname, '/images', req.params.imgName + '.' + newFileExtension);

    fs.unlink(oldImgPath, (err) =>{if(err) res.sendStatus(500)});
    fs.rename(oldPath, newPath, (err) =>{if(err) res.sendStatus(500)});
    res.sendStatus(200);


});


app.listen(1395);