var mongoose = require('mongoose');
var Schema = mongoose.Schema;


mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

var db = mongoose.connection;
/*
var userSchema = new Schema({
    username: {
        type: String,
        required: true, 
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String
    },
    id: {
        type: String
    }
});

IdCount = 0

var User = mongoose.model('User', userSchema);

IdCount+=1

var admin = new User({
    id:IdCount,
    username:'KEVIN',
    password:'7890',
    email:'yahoo.com.tw',
})
*/

/*
admin.save(function(err, result){
    if(err) {
        console.log('保存失敗')
    } else {
        console.log("保存成功")
        console.log(result) 
    }
    db.close()
})
*/

/*
User.find(function(err,ret) {
    if(err) {
        console.log('查詢失敗')
    } else {
        console.log("查詢成功")
        console.log(ret)
    }
    db.close()
})
*/

/*
User.deleteMany( {'username':'KEVIN'}, function(err,ret) {
    if(err) {
        console.log('刪除失敗')
    } else {
        console.log('刪除成功')
        console.log(ret)
        db.close()
    }
})
*/

/*
User.findByIdAndUpdate( '5ce8ae68a5386259e0b26b4c',{ password:'1111'}, function(err,ret) {
    if(err) {
        console.log('更新失敗')
    } else {
        console.log('更新成功')
        console.log(ret)
    }
})
*/
/*
User.find( {"username" : "KEVIN"}, {_id: 0, id: 1}, function(err,ret) {
    if(err) {
        console.log('查詢失敗')
    } else {
        console.log("查詢成功")
        console.log(ret)
        console.log(ret[0])
        console.log(ret[0].id)
        console.log(ret[0].username)
    }
    db.close()
})
*/


var PosterSchema = new Schema({
    author: {
        type: String,
        required: true, 
    },
    content: {
        type: String,
        required: true,
    },
    createTime: {
        type: String
    },
    id: {
        type: String
    }
});

var Poster = mongoose.model('Poster', PosterSchema);
/*
IdCount = 2;
//IdCount+=1

var admin = new Poster({
    id:IdCount,
    author:'Amy',
    content:'1230',
    createTime: new Date()
});


admin.save(function(err, result){
    if(err) {
        console.log('保存失敗')
    } else {
        console.log("保存成功")
        console.log(result) 
    }
    db.close()
});
*/
Poster.deleteMany( {'id':'2'}, function(err,ret) {
    if(err) {
        console.log('刪除失敗')
    } else {
        console.log('刪除成功')
        console.log(ret)
        db.close()
    }
})