const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    if (request.url == '/') {
        fs.readFile('views/index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/stylesheets/style.css") {
        fs.readFile("/stylesheets/style.css", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/cars") {
        fs.readFile("views/cars.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });  
    }    
    else if(request.url === "/cat") {
        fs.readFile("views/cat.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end(); 
            
            });         
         }
    else if (request.url === '/ninjas') {
       fs.readFile('views/new.html', 'utf8', (errors, contents) => {
           response.writeHead(200, {'Content-type': 'text/html'});
           response.write(contents);
           response.end();
        });
    }
    else if (request.url === '/images/cat.jpg') {
        fs.readFile('/images/cat.jpg', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
         });
    }
    else if (request.url === '/images/car.jpg') {
        fs.readFile('/images/car.jpg', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else {
        response.writeHead(404);
        response.end("File not found!!!");
    }

});

server.listen(8000);
console.log("I am going to eat your babies")