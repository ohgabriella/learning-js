import { createServer, IncomingMessage, ServerResponse } from "http";
import { parse } from "query-string";
import * as url from "url";
import { writeFile } from "fs"; 


const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {

    const urlparse = url.parse(req.url ? req.url : '', true);

    const params = parse(urlparse.search ? urlparse.search : '');
    
    var resposta: string;

    if(urlparse.pathname == '/criar-usuario') {
    
        writeFile('users/' + params.id + '.txt', JSON.stringify(params) , function (err) {
            if (err) throw err;
                console.log('Saved!');
            });
    
        resposta = 'usuario criado com sucesso'; 
        res.end(resposta);
      }
});


server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});


