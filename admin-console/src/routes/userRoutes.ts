import express from 'express';
import { getUsers } from '../controllers/userController';

const router = express.Router();

// Route to fetch user data
router.get('/', getUsers);

export default router;