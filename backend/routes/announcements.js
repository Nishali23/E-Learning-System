const express = require("express");
const router = express.Router();

const {
  getAllAnnouncements,
  createAnnouncement,
  getAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} = require("../controllers/announcements");

router.route("/").get(getAllAnnouncements).post(createAnnouncement);
router
  .route("/:id")
  .get(getAnnouncement)
  .patch(updateAnnouncement)
  .delete(deleteAnnouncement);

module.exports = router;
