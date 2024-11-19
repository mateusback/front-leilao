import BaseService from "./BaseService";

class PersonService extends BaseService{

    constructor(){
        super('/person');
    }

    async login(credentials){
        try {
            const response = await this.api.post(`${this.endpoint}/login`, credentials);
            console.log(response)
            return response.data;
        }
        catch (error) {
            throw new Error(error.response?.data?.message || 'Erro desconhecido ao realizar login.');
        }
    }
}

export default PersonService;