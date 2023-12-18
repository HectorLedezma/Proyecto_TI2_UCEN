import express from 'express';
import {
    Create, 
    ReadOne, 
    ReadAll,
    CreateBike,
    CreateEst,
    ReadAllB,
    ReadCarr,
    ReadAllHist,
    Update,
    UpdateBici,
    UpdateBici2,
    ReadOneB,
    ReadOnePB
} from '../controller/BlogController.js';

const router = express.Router();

router.post('/create/',Create)
router.put('/updateP/:rut',Update)
router.put('/updateB/:id/:rut',UpdateBici)
router.put('/updateBB/:id/:rut',UpdateBici2)
router.get('/select/:rut',ReadOne);
router.get('/selectT',ReadAll);
router.get('/selectB/:rut_e',ReadAllB);
router.get('/selectOB/:id_t/:rut_e',ReadOneB);
router.get('/selectPB/:rut_e',ReadOnePB);
router.get('/selectC',ReadCarr);
router.get('/selectH/:rut_e',ReadAllHist);
//router.put('/update',Update);
//router.delete('/delete',Delete);
router.post('/createE/',CreateEst);
router.post('/createB/',CreateBike);


export default router