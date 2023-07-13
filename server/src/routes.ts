module.exports = (app) => {
    app.post('/register', (request, response) => {
        response.send({
            message: `Cliente cadastrado com sucesso`
        });
    });
}