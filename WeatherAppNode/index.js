const http = require("http");
const fs = require("fs");
var request = require("request");

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) =>{
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].country);
    return temperature;
}

const server = http.createServer((req, res) =>{
    if(req.url == "/"){
        request(
            "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=3ba89d4317f2086115377c400aae899e", 
            )
        .on("data", (chunk) =>{
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            // console.log(arrData[0].main.temp);
            const realTimeData = arrData.map((val)=>
                // console.log(val.main);
                replaceVal(homeFile, val)).join("");
                // res.write(realTimeData);
            console.log(realTimeData);
        })
        .on("end",(err) =>{
            if(err) return console.log("connection closed due to error");
            res.end();

            // console.log("end");
        });
    }
});

server.listen(8000, "127.0.0.1");