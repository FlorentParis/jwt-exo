import axios from "axios";
import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";

export default function useLogin() {
    return (username: string, password: string): Promise<LoginResponseInterface> => {
        return axios.get('http://localhost:2345/login.php', {
            headers: {
                Authorization: `Basic ${btoa(username + ':' + password)}`
            }
        })
            .then(res => res.data)
    }
}
