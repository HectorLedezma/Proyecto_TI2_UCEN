import axios from "axios";
const uri = 'http://localhost:3001/send-email/';

export class Nodocorreo{
    async enviar(mail,pass){
        try{
            const data = {
                mail:mail,
                newpass:pass
            }
            await axios.post(uri,data);
        }catch(err){
            console.log(err);
        }
        
    }
}