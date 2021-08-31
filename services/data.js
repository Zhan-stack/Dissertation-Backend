var { db } = require('../model/data');
const { v4: uuidv4 } = require('uuid');

const postData = async (req, res, next) => {
    const { selectedIds, unselectedIds, timeTaken } = req.body
    console.log(req.body)
    const uuid = uuidv4()
    try {
        const docRef = db.collection('data').doc(uuid);

        await docRef.set(req.body);
        return res.status(200).send()
    } catch (E) {
        console.log(E)
        res.status(400).send()
    }
}

module.exports = { postData }

