import axios from "axios";
const uri = 'http://localhost:3001/send-email/';

export class Nodocorreo{
    async enviar(mail,npass){
        try{
            await axios.post(uri+mail+'/'+npass);
        }catch(err){
            console.log(err);
        }
        
    }
}