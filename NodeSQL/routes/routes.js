import express from 'express';
import {
    Create, 
    ReadOne, 
    ReadAll,
    Update,
    Delete,
    CreateBike
} from '../controller/BlogController.js';

const router = express.Router();

router.post('/create/',Create)
router.get('/select/:rut',ReadOne);
router.get('/select',ReadAll);
router.put('/update',Update);
router.delete('/delete',Delete);

router.post('/createB/',CreateBike);


export default router