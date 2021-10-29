class ResponseError {
    constructor(error){
        this.success = false;
        this.error = error;
    }
}

module.exports = ResponseError;