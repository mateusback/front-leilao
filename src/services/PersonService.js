import BaseService from "./BaseService";

class PersonService extends BaseService{
    constructor(){
        super('/person');
    }

    async login(credentials){
        try {
            const response = await this.api.post(`${this.endpoint}/login`, credentials);
            return response.data;
        }
        catch (error) {
            throw new Error(error.response?.data?.message || 'Erro desconhecido ao realizar login.');
        }
    }

    async register(personData){
        try {
            const response = await this.api.post(this.endpoint, personData);
            return response.data;
        }
        catch (error) {
            throw new Error(error.response?.data?.message || 'Erro desconhecido ao registrar sua conta, tenta novamente mais tarde.');
        }
    }

    async confirmEmail(personData){
        try {
            const response = await this.api.patch(`${this.endpoint}/confirm-registration`, personData);
            return response.data;
        }
        catch (error) {
            throw new Error(error.response?.data?.message || 'Erro desconhecido ao confirmar sua conta, tenta novamente mais tarde.');
        }
    }

    async recoverPassword(personEmail){
        try {
            const response = await this.api.post(`${this.endpoint}/recover-password`, personEmail);
            return response.data;
        }
        catch (error) {
            throw new Error(error.response?.data?.message || 'Erro desconhecido ao recuperar a senha, tente novamete mais tarde.');
        }
    }

    async changePassword(personData){
        try {
            const response = await this.api.patch(`${this.endpoint}/change-password`, personData);
            return response.data;
        }
        catch (error) {
            throw new Error(error.response?.data?.message || 'Erro desconhecido ao alterar a senha, tente novamete mais tarde.');
        }
    }

}

export default PersonService;