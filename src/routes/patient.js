const express = require('express');
const patientSchema = require("../models/patient");

const router = express.Router();

// Create patient
/**
 * @swagger
 * components:
 *  schemas:
 *      Patient: 
 *          type: object
 *          properties:
 *              _id: 
 *                  type: string
 *                  description: Patient id
 *              patient:
 *                  type: string
 *                  description: Patient name
 *              documentType:
 *                  type: string
 *                  description: Patient document type
 *              document:
 *                  type: string
 *                  description: Patient document
 *              email:
 *                  type: string
 *                  description: Patient email
 *              address:
 *                  type: string
 *                  description: Patient address
 *              dentist:
 *                  type: string
 *                  description: Dentist name
 *              bloodType:
 *                  type: string
 *                  description: Patient blood type
 *              treatment:
 *                  type: string
 *                  description: Patient treatment
 *              price:
 *                  type: number
 *                  description: Patient treatment price
 *              state:
 *                  type: number
 *                  description: Patient state
 *          required:
 *              - _id
 *              - patient
 *              - documentType
 *              - document
 *              - email
 *              - address
 *              - dentist
 *              - bloodType
 *              - treatment
 *              - price
 *              - state
 *          example:
 *              _id: p2
 *              patient: Andrés Castro
 *              documentType: CC
 *              document: 1092358865
 *              email: castromanzano95@gmail.com
 *              address: Calle 1234
 *              dentist: Pablito Peréz
 *              bloodType: O+
 *              treatment: Quitar cordales
 *              price: 400000
 *              state: 1
 *       
 */

/**
 * @swagger
 * /api/patients:
 *  post:
 *      summary: create a new patient
 *      tags: [Patient]
 *      requestBody:
 *          required: true
 *          content:
 *              aplication/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Patient' 
 *      responses:
 *          200:
 *              description: New patient created successfully
 */

router.post('/patients', (req, res) => {
    const patient = patientSchema(req.body.json);
    patient
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Get all patients
/**
 * @swagger
 * /api/patients:
 *  get:
 *      summary: return all patients
 *      tags: [Patient]
 *      responses:
 *          200:
 *              description: All patients are returned
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Patient' 
 */
router.get('/patients', (req, res) => {
    patientSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Get patient by id
/**
 * @swagger
 * /api/patient/{id}:
 *  get:
 *      summary: return a patient
 *      tags: [Patient]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: The user id
 *      responses:
 *          200:
 *              description: Patient returned
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Patient'
 *          404:
 *              description: Patient not found
 */
router.get('/patient/:id', (req, res) => {
    const { id } = req.params;
    patientSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Update patient
/**
 * @swagger
 * /api/patient/{id}:
 *  put:
 *      summary: update a patient
 *      tags: [Patient]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: The user id
 *      requestBody:
 *          required: true
 *          content:
 *              aplication/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Patient' 
 *      responses:
 *          200:
 *              description: Patient updated successfully
 *          404:
 *              description: Patient not found
 */
router.put('/patient/:id', (req, res) => {
    const { id } = req.params;
    const { patient, documentType, document, email, address, dentist, bloodType, treatment, price, state } = req.body;
    patientSchema
        .updateOne({ _id: id }, { $set: { patient, documentType, document, email, address, bloodType, treatment, price, state } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Delete a patient
/**
 * @swagger
 * /api/patient/{id}:
 *  delete:
 *      summary: delete a patient
 *      tags: [Patient]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: The user id
 *      responses:
 *          200:
 *              description: Patient deleted successfully
 *          404:
 *              description: Patient not found
 */
router.delete('/patient/:id', (req, res) => {
    const { id } = req.params;
    patientSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;