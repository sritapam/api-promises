const express = require('express');
const server = express();

let posts = [];
/** 
 * {
 *  id: number,
 *  content: string,
 * }
 * 
 */

server.use(express.json());

// http://localhost:3000

/* 
    {
        id: number,
        content: string,
    }
*/

server.post("/posts", (req, res) => {
    try {
        let {content} = req.body;
        if(content) {
            let newPost = {
                id: posts.length + 1,
                content: content
            }
            posts.push(newPost);
            res.json(newPost);
        }

        res.status(404).json({
            error: "No se recibieron el parametro content"
        });

    } catch (e) {
        res.status(404).json({
            message: "Ocurrio un error",
            error: e?.message
        })
    }
});

// urllocalhost/posts/1
server.get("/posts", (req, res) => {
    try {
        res.json(posts)
    } catch (error) {
        res.status(404).json({
            message: "Ocurrio un error",
            error: e?.message
        })
    }
});


server.listen(3000, () => {
    console.log('Servidor iniciado')
});
