

const createUser = async (req, res) => {
    console.log(req.body);
    try {
      const { email, password, name, role } = req.body;
    } catch (e) {
      return res
    }
};

module.exports = {
    createUser,
};