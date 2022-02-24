import express from "express";
import {getComments, getCommentsByUserId, getCommentsByEventId, createComment, updateComment} from "../controller/commentsController.js";


const router = express.Router()

router.get('/', getComments);
router.get("/:id", getCommentsByUserId);
router.get("/event/:id", getCommentsByEventId);
router.post('/', createComment);
router.patch("/", updateComment);

export default router;
  

  