const DiaryEntry = require("../Model/diaryModel");

module.exports.getAllEntries = async (req,res,next) => {
    try {
        const entries = await DiaryEntry.find({userId : req.params.id}).select([
            "title",
            "body",
            "day"
        ])
        return res.json(entries)
    } catch (error) {
        next(error)
    }
}

module.exports.createEntry = async (req,res,next) => {
    try {
        const post = req.body;
        const entry = await DiaryEntry.create(post);
        return res.json({ status: true, entry})
    } catch (error) {
        next(error)
    }
}