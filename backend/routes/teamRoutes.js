import express from 'express';
import { addTeam,getTeamById } from '../controllers/teamController.js';

const router = express.Router();
router.route('/').post(addTeam);
router.route('/:id').get(getTeamById);

export default router;