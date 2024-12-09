import BaseService from "./BaseService";

class CategoryService extends BaseService {
    constructor() {
        super("/category");
    }

    async insert(categoryData) {
        try {
            const response = await this.api.post(this.endpoint, categoryData);
            return response.data;
        }
        catch (error) {
            throw new Error(error.response?.data?.message || 'Erro desconhecido ao inserir a categoria, tente novamente mais tarde.');
        }
    }

    async update(categoryData) {
        try {
            const response = await this.api.put(this.endpoint, categoryData);
            return response.data;
        }
        catch (error) {
            throw new Error(error.response?.data?.message || 'Erro desconhecido ao atualizar a categoria, tente novamente mais tarde.');
        }
    }

    async delete(id) {
        try {
            const response = await this.api.delete(`${this.endpoint}/${id}`);
            return response.data;
        }
        catch (error) {
            throw new Error(error.response?.data?.message || 'Erro desconhecido ao deletar a categoria, tente novamente mais tarde.');
        }
    }

    async getAll() {
        try {
          const response = await this.api.get(this.endpoint);
          return response.data;
        } catch (error) {
          throw new Error(error.response?.data?.message || "Erro ao buscar categorias, tente novamente mais tarde.");
        }
    }

}

export default CategoryService;