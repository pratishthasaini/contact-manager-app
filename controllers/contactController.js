const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
// @desc get contact
// @route GET /api/contacts
// @access PUBLIC
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// @desc create contact
// @route POST /api/contacts
// @access PUBLIC
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phn } = req.body;
  if (!name || !email || !phn) {
    res.status(400);
    throw new Error("all fields are mandatory");
  }
  const contact = await Contact.create({name, email, phn});
  res.status(201).json(contact);
});

// @desc get contact
// @route GET /api/contacts/:id
// @access PUBLIC
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("contact not found");
  }
  res.status(200).json(contact);
});

// @desc update contact
// @route PUT /api/contacts/:id
// @access PUBLIC
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("contact not found");
  }
  if(contact.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("user don't have permission to edit others details")
  }
   const newContact = await Contact.findByIdAndUpdate(req.params.id, req.body,{new : true});
   res.status(200).json(newContact);
});
// @desc delete contact
// @route DELETE /api/contacts/:id
// @access PUBLIC
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("contact not found");
  }
  if(contact.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("user don't have permission to delete others details")
  }
  await contact.deleteOne();
  res.status(200).json({message : "contact deleted"});
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
