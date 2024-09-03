const Marca = require('../models/marcamodel');

const getAll = async (req, res) => {
    try {
        const marcas = await Marca.findAll();
        return res.status(200).json({ success: true, data: marcas });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const getMarca = async (req, res) => {
    try {
        const { id } = req.params;
        const marca = await Marca.findByPk(id);
        if (!marca) {
            return res.status(404).json({ success: false, message: 'Marca não encontrada' });
        }
        return res.status(200).json({ success: true, data: marca });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const addMarca = async (req, res) => {
    try {
        const { nome } = req.body;
        const marca = await Marca.create({ nome });
        return res.status(201).json({ success: true, data: marca });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const setMarca = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome } = req.body;
        const marca = await Marca.findByPk(id);
        if (!marca) {
            return res.status(404).json({ success: false, message: 'Marca não encontrada' });
        }
        await marca.update({ nome });
        return res.status(200).json({ success: true, data: marca });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const deleteMarca = async (req, res) => {
    try {
        const { id } = req.params;
        const marca = await Marca.findByPk(id);
        if (!marca) {
            return res.status(404).json({ success: false, message: 'Marca não encontrada' });
        }
        await marca.destroy();
        return res.status(200).json({ success: true, message: 'Marca excluída' });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    getAll,
    getMarca,
    addMarca,
    setMarca,
    deleteMarca
};
