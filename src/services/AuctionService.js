import BaseService from "./BaseService";

class AuctionService extends BaseService {
    constructor() {
        super("/auction");
    }

    async insert(auctionData) {
        try {
            const response = await this.api.post(this.endpoint, auctionData);
            return response.data;
        }
        catch (error) {
            throw new Error(error.response?.data?.message || 'Erro desconhecido ao inserir o leilão, tente novamente mais tarde.');
        }
    }

    async update(auctionData) {
        try {
            const response = await this.api.put(this.endpoint, auctionData);
            return response.data;
        }
        catch (error) {
            throw new Error(error.response?.data?.message || 'Erro desconhecido ao atualizar o leilão, tente novamente mais tarde.');
        }
    }

    async delete(id) {
        try {
            const response = await this.api.delete(`${this.endpoint}/${id}`);
            return response.data;
        }
        catch (error) {
            throw new Error(error.response?.data?.message || 'Erro desconhecido ao deletar o leilão, tente novamente mais tarde.');
        }
    }

    async getAll() {
        try {
          const response = await this.api.get(this.endpoint);
          return response.data;
        } catch (error) {
          throw new Error(error.response?.data?.message || "Erro ao buscar leilões, tente novamente mais tarde.");
        }
    }
    
    async getById(id) {
        try{
            const response = await this.api.get(`${this.endpoint}/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || "Erro ao buscar leilão, tente novamente mais tarde.");
        }
    }
}


export default AuctionService;