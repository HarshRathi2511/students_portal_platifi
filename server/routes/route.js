import express from 'express';
import {addUser, getUsers,getUser, editUser, deleteUser} from '../controller/user-controller.js';

const router = express.Router();


router.post('/students/add', addUser);
router.get('/students', getUsers);
router.get('/students/edit/:id', getUser);
router.delete('/students/:id', deleteUser);
router.post('/students/edit/:id', editUser);

export default router;