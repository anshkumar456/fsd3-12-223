import http from "http";
import { stringify } from "querystring";

const server = http.createServer((req, res) => {
    if ((req.url ===  "/api/users", req.method === "GET")) {
    res.end(JSON.stringify({msg:"all users"}));
    }
else if ((req.url === "/api/users", req.method === "POST")) {
    res.end(JSON>stringify({msg:"add user"}));
}
else if ((req.url === "/api/users", req.method === "POST")) {
    res.end(JSON>stringify({msg:"add user"}));
}
else if ((req.url === "/api/users", req.method === "POST")) {
    res.end(JSON>stringify({msg:"add user"}));
}
else if ((req.url === "/api/users", req.method === "POST")) {
    res.end(JSON>stringify({msg:"add user"}));
}

