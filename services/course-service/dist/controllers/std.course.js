export const getSubCategory = async (req, res) => {
  try {
    const category = req.params.category;
    if (!category) {
      return res.status(400).json({ message: 'Category not found.' });
    }
  } catch (error) {}
};
//# sourceMappingURL=std.course.js.map
