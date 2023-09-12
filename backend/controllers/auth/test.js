const mongoose = require('mongoose');
const User = require("../../models/user");
const json2csv = require('json2csv').Parser;
const fs = require('fs');

const exportData = async (req, res) => {
    try{
        const user = await User.find();
        console.log('users', user);

        const fields = ['mail', 'username', 'password'];
        const json2csvParser = new json2csv({ fields });
        const csvData = json2csvParser.parse(user);

        // write to csv
        fs.writeFileSync('user.csv', csvData);
       
    } catch (err) {
        return res.status(500).send('Error export');
    }
}

module.exports = exportData;

exportData();