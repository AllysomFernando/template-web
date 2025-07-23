import api from "@/axios/api-config"
import { ISenderEmail } from "@/interfaces/axios/request/ISenderEmailApiZap"
import { ISenderEmailData } from "@/interfaces/data/ISenderEmailData"

export const useAxios = {
    sendEmail: async ({nome}: ISenderEmailData) => {
        const body: ISenderEmail = {
            nome
        } 
        try{
            const res = await api.post('', JSON.stringify(body))
            return res
        }catch(e){
            console.log("Ocorreu um erro ao enviar o e-mail", e)
        }
    }
    
}

