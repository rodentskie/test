import { Router } from 'express';
import insertPhoneNumber from '../../resolver/phone-number/insert-phone-number';

const router = Router();

router.post('/phone-number', insertPhoneNumber);

export = router;
