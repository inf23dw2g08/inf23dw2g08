const Colaborador = require('../models/colaboradormodel');

const getAll = async (req, res) => {
    try {
        const colaboradores = await Colaborador.findAll();
        return res.status(200).json({ success: true, data: colaboradores });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const getColaborador = async (req, res) => {
    try {
        const { id } = req.params;
        const colaborador = await Colaborador.findByPk(id);
        if (!colaborador) {
            return res.status(404).json({ success: false, message: 'Colaborador not found' });
        }
        return res.status(200).json({ success: true, data: colaborador });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const addColaborador = async (req, res) => {
    try {
        const { nome, email, cargo, equipa } = req.body;
        const colaborador = await Colaborador.create({ nome, email, cargo, equipa });
        return res.status(201).json({ success: true, data: colaborador });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const setColaborador = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email, cargo, equipa } = req.body;
        const colaborador = await Colaborador.findByPk(id);
        if (!colaborador) {
            return res.status(404).json({ success: false, message: 'Colaborador not found' });
        }
        await colaborador.update({ nome, email, cargo, equipa });
        return res.status(200).json({ success: true, data: colaborador });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const deleteColaborador = async (req, res) => {
    try {
        const { id } = req.params;
        const colaborador = await Colaborador.findByPk(id);
        if (!colaborador) {
            return res.status(404).json({ success: false, message: 'Colaborador not found' });
        }
        await colaborador.destroy();
        return res.status(200).json({ success: true, message: 'Colaborador deleted' });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    getAll,
    getColaborador,
    addColaborador,
    setColaborador,
    deleteColaborador
};
