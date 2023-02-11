class CrudService {

    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        try {
           const result = await this.repository.create(data);
           return result; 
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async destroy(modelId) {
        try {
            const result = await this.repository.destroy(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud service");
            throw {error};
        }
    }

    async update(modelId, data) {
        try {
            const result = await this.repository.update(modelId, data);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud service");
            throw {error};
        }
    }

    async get(modelId) {
        try {
            const result = await this.repository.get(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud service");
            throw {error};
        }
    }

    async getAll() {
        try {
            const result = await this.repository.getAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in crud service");
            throw {error};
        }
    }

}

module.exports = CrudService;