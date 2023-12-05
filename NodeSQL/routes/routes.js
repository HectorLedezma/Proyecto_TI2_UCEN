import express from 'express';
import {Create, ReadOne, ReadAll,Update,Delete} from '../controller/BlogController.js';

const router = express.Router();

router.post('/create',Create)
router.get('/select/:Mail',ReadOne);
router.get('/select',ReadAll);
router.put('/update',Update);
router.delete('/delete',Delete);


export default router