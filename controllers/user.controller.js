import userModel from "../models/user.model.js";
import logger from "../app.js";

class UserController {
  async create(req, res) {
    try {
      const data = {
        email: req.user.email
      };

      const user = await userModel.create(data);
      return res.status(200).send({
        success: true,
        data: user
      });
    } catch (err) {
      logger.error(err);
      return res.status(500).send({
        success: false,
        error: err.message
      });
    }
  }
}

export default new UserController();
