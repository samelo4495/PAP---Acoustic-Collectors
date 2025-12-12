import { get, set, ref, update, remove, push, onValue} from "firebase/database";
import { db } from "./db.mjs";

async function write(index, data) {
    if (!index || !data) throw Error("Nó ou o dado informado não é válido ou não existe");
    
    const dbRef = ref(db, index);// ref é uma funcao que cria uma referencia para escrever no diretorio especifico (neste caso o index)
    await set(dbRef, data); //await é a funcao que espera o preenchimento da promise (promise é um valor de uma variavel do futuro)
    // set é uma funcao que escreve o dado no diretorio especifico
}

async function read(index) {
    if (!index) throw Error("Nó informado não é válido ou não existe");

    const dbRef = ref(db, index);
    const snapshot = await get(dbRef);//get é a função que lê os dados uma vez

    if (snapshot.exists()) { //snapshot é a forma de como a firebase vai me entregar os dados (.exist verifica se existe alguma coisa)
        return snapshot.val();//.val vai retornar o valor
    }

    return null;
}

async function updateData(index, data) {
    if (!index || !data) throw Error("Nó ou o dado informado não é válido ou não existe");
    
    const dbRef = ref(db, index);
    await update(dbRef, data);//update é a função que atualiza o dado no diretorio especifico
}

async function removeData(index) {
    if (!index) throw Error("Nó ou o dado informado não é válido ou não existe");
    
    const dbRef = ref(db, index);
    await remove(dbRef);//remove é a função que remove o dado do diretorio especifico
}

async function addData(index, data) {
    if (!index || !data) throw Error("Nó ou o dado informado não é válido ou não existe");
    
    const dbRef = ref(db, index);
    const listaNova = push(dbRef);//push é a função que cria um novo nó filho com um id unico
    await set(listaNova, data);

    return listaNova.key;//esta linha vai retornar o id criado (.key mostra a chave unica do nó criado)
}

// funcao para mostrar atualizações em tempo real(ajuda do copilot)
async function listen(index, dados) {
    if (!index || !dados) throw Error("Nó ou o callback informado não é válido ou não existe"); 

    const dbRef = ref(db, index);
    onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
            dados(snapshot.val());
        } else {
            dados(null);
        }
    });
}

//Codigo do listen 

// database.listen(nome do no atualizado, (dados) => {
//     console.log("Dados atualizados:", dados);
// });

export const database = {
    write,
    read,
    updateData,
    removeData,
    addData,
    listen
}