var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    database: "companydb",
    user: "root",
    password: "root"
});
connection.connect(function (err) {
    if (err) {
        console.log("数据库连接失败！");
        console.log("错误信息%s", err.message);
    } else {
        console.log("数据库连接成功！");
    }
});
//var cha = "insert into dept value(?,?,?)";
//var parameter = [60, '广告部', 'M1区'];
var cha="select * from dept ";
connection.query(cha, function (err, result) {
    if (err) {
        console.log("数据库更新失败hah！");
    } else {
        console.log("数据库更新成功！");
        console.log(result);
    }
});
connection.end(function (err) {
    console.log("数据库正常关闭！");
});