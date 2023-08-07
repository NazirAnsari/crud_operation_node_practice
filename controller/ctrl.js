const db = require('../Models/index')

//create main models

const contact_forms = db.contact_forms;

//main Work
//1. create a product
const addcontact = async (req, res) => {
    try {
        let info = {
            First_Name: req.body.First_Name,
            Last_Name: req.body.Last_Name,
            Email: req.body.Email,
            Phone: req.body.Phone,
            Password: req.body.Password,
            confirm_password: req.body.Confirm_password,
            Country: req.body.Country,
            State: req.body.State,
            City: req.body.City,
            Zip_code: req.body.Zip_Code
        }

        // Check if password and confirm password match
        if (info.Password !== info.confirm_password) {
            return res.status(400).json({ error: 'Password and Confirm Password do not match' });
        }
        const contact_form_data = await contact_forms.create(info)
        res.status(200).send(contact_form_data)
    }
    catch (err) {
        console.log("err", err)
    }


}


const getallproduct = async (req, res) => {
    try {
        const data = await contact_forms.findAll();
        res.status(200).send({ data })
    }
    catch (err) {
        console.log('err', err)
    }
}

// get one product
const getoneproduct = async (req, res) => {
    console.log("one product", req.params.id)
    let id = req.params.id
    const product = await contact_forms.findOne({ where: { id: id } })
    console.log("product is ", product)
    res.status(200).send(product)
}
// get update data
const updatedata = async (req, res) => {
    let id = req.params.id
    const product = await contact_forms.update(req.body, { where: { id: id } })
    res.status(200).send(product)
}

// get delete
const deletedata = async (req, res) => {
    let id = req.params.id
    await contact_forms.destroy({ where: { id: id } })
    res.status(200).send("product is deleted")
}


module.exports = {
    getallproduct,
    addcontact,
    getoneproduct,
    updatedata,
    deletedata
}