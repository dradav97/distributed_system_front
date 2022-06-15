import axios from "axios";

export const handler = async (req: Request, res: Response) => {
    try{
        const data = await axios.post(process.env.API_URL||'')
    }catch(e){
        console.log(e);
    }
}