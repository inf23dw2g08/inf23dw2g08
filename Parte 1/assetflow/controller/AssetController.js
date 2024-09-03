const Asset = require('../models/assetmodel');

const getAll = async (req, res) => {
    try {
        const assets = await Asset.findAll();
        return res.status(200).json({ success: true, data: assets });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const getAsset = async (req, res) => {
    try {
        const { id } = req.params;
        const asset = await Asset.findByPk(id);
        if (!asset) {
            return res.status(404).json({ success: false, message: 'Asset não encontrado' });
        }
        return res.status(200).json({ success: true, data: asset });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const addAsset = async (req, res) => {
    try {
        const { id_marca, id_colaborador, descricao, nome, preco } = req.body;
        const asset = await Asset.create({ id_marca, id_colaborador, descricao, nome, preco });
        return res.status(201).json({ success: true, data: asset });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const updateAsset = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_marca, id_colaborador, descricao, nome, preco } = req.body;
        const asset = await Asset.findByPk(id);
        if (!asset) {
            return res.status(404).json({ success: false, message: 'Asset não encontrado' });
        }
        await asset.update({ id_marca, id_colaborador, descricao, nome, preco });
        return res.status(200).json({ success: true, data: asset });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const deleteAsset = async (req, res) => {
    try {
        const { id } = req.params;
        const asset = await Asset.findByPk(id);
        if (!asset) {
            return res.status(404).json({ success: false, message: 'Asset não encontrado' });
        }
        await asset.destroy();
        return res.status(200).json({ success: true, message: 'Asset excluído' });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    getAll,
    getAsset,
    addAsset,
    updateAsset,
    deleteAsset
};
