import comment from "../models/comments.js";

// GET ALL COMMENTS

export const getComments = async (req, res) => {
    const comments = await comment.find();
    res.status(200).json(comments);
};

// GET COMMENTS BY USER ID

export const getCommentsByUserId = async (req, res) => {
    console.log("accessing function")
    const id = String(req.params.id); 
    console.log("id:", id)
    const comments = await comment.find({author_id: id});
    res.status(200).json(comments);
};

// GET COMMENTS BY EVENT ID 

export const getCommentsByEventId = async (req, res) => {
    console.log("Accessing function.")
    const id = String(req.params.id);
    console.log("Id:", id, typeof id);
    const comments = await comment.find({event_id: id});
    console.log(comments)
    res.status(200).json(comments);
}

// CREATE COMMENTS

export const createComment = async (req, res) => {
    console.log(req.body)
    const author_id =  req.body.author_id;
    const body =  req.body.text;
    const event_id = req.body.event_id;
    console.log(author_id, body)
    const newComment = await comment.create({
      "author_id": author_id,
      "text": body,
      "event_id": event_id,
    })
    // res.send({"newComment": newComment});
    res.status(201).json(newComment);
};

