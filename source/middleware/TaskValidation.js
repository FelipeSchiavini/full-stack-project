const TaskModal = require('../model/taskModel')
const { isPast } = require('date-fns')
const taskModel = require('../model/taskModel')

const TaskValidation = async (req, res, next) => {
    const { macadress, type, title, description, when } = req.body
    if(!macadress)
        return res.status(400).json({error: 'macaddress é obrigatório'})
    else if(!type)    
        res.status(400).json({error: 'tipo é obrigatório'})
    else if(!title)    
        res.status(400).json({error: 'titulo é obrigatório'})
    else if(!description)    
        res.status(400).json({error: 'descrição obrigatório'})
    else if(!when)    
        res.status(400).json({error: 'data e hora são obrigatórios'})
    else if(isPast(new Date(when)))
        res.status(400).json({error: 'data deve estar no futuro !'})
    else{
        let exists;
        exists = await taskModel.findOne(
            {
            'when': { '$eq': new Date(when) }, 
            'macadress': { '$in': macadress }
            });
        if (exists){
            return res.status(400).json({error: 'tarefa já existe no msm horario'})
        }
        next()
    }
    
}

module.exports = TaskValidation;