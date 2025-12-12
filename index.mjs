import { database } from "./database/func.mjs";

try {
    const before = Date.now();
    const data = await database.read("/ping");             //Função Read
    const after = Date.now();
    const ping = after - before;
    console.log("O login na firebase foi sucessível.");
    if ( data ) console.log(`Ping! ${data} ${ping}ms`); else console.log("Ping! sem dados retornados.");
} catch (e) {
    console.log("Erro ao fazer login na firebase:" , e);
}
