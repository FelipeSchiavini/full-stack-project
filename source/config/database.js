const mongoose = require('mongoose')

const url ='mongodb+srv://root:root@projetos.t8iq3.mongodb.net/producao?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
});

module.exports = mongoose;


