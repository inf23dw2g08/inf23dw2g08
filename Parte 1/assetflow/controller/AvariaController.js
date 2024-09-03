const Avaria = require('../models/avariamodel');

const getAll = async (req, res) => {
    try {
        const avarias = await Avaria.findAll();
        return res.status(200).json({ success: true, data: avarias });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const getAvaria = async (req, res) => {
    try {
        const { id } = req.params;
        const avaria = await Avaria.findByPk(id);
        if (!avaria) {
            return res.status(404).json({ success: false, message: 'Avaria não encontrada' });
        }
        return res.status(200).json({ success: true, data: avaria });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const addAvaria = async (req, res) => {
    try {
        const { id_asset, id_colaborador, preco_reparacao } = req.body;
        const avaria = await Avaria.create({ id_asset, id_colaborador, preco_reparacao });
        return res.status(201).json({ success: true, data: avaria });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const setAvaria = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_asset, id_colaborador, preco_reparacao } = req.body;
        const avaria = await Avaria.findByPk(id);
        if (!avaria) {
            return res.status(404).json({ success: false, message: 'Avaria não encontrada' });
        }
        await avaria.update({ id_asset, id_colaborador, preco_reparacao });
        return res.status(200).json({ success: true, data: avaria });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const deleteAvaria = async (req, res) => {
    try {
        const { id } = req.params;
        const avaria = await Avaria.findByPk(id);
        if (!avaria) {
            return res.status(404).json({ success: false, message: 'Avaria não encontrada' });
        }
        await avaria.destroy();
        return res.status(200).json({ success: true, message: 'Avaria excluída' });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    getAll,
    getAvaria,
    addAvaria,
    setAvaria,
    deleteAvaria
};
