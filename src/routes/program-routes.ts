import { Router } from 'express';
import { ProgramController } from '@/controllers';

const router: Router = Router();
router.get('/', ProgramController.getAllPrograms);

export default router;
