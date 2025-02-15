const asyncHandler = require("express-async-handler");

const { User } = require("../../models");

const HttpError = require("../../helpers");

const logout = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });

  return res.status(204).json({
    Status: 204,
  });
});

module.exports = logout;
