export const getAllCategory = async (req, res) => {
    try {
        const { name } = req.body;
        return res.status(200).json({ message: name });
    }
    catch (error) {
        return res.status(500).json({ mesage: error.message || 'Error' });
    }
};
//# sourceMappingURL=admin.category.js.map