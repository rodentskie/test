import { Router } from 'express';
import insertPhoneNumber from '../../resolver/phone-number/insert-phone-number';
import getPhoneNumber from '../../resolver/phone-number/get-phone-numbers';
import updatePhoneNumber from '../../resolver/phone-number/update-phone-number';
import deletePhoneNumber from '../../resolver/phone-number/delete-phone-number';

const router = Router();

router.post('/phone-number', insertPhoneNumber);
router.put('/phone-number/:id', updatePhoneNumber);
router.delete('/phone-number/:id', deletePhoneNumber);
router.get('/phone-numbers', getPhoneNumber);

export = router;
