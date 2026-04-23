import { Router } from 'express';
import {
  getAllPortfolioProjects,
  getPortfolioProjectById,
  createPortfolioProject,
  updatePortfolioProject,
  deletePortfolioProject
} from '../controllers/portfolioProjectController';

const router = Router();

router.get('/', getAllPortfolioProjects);
router.get('/:id', getPortfolioProjectById);
router.post('/', createPortfolioProject);
router.put('/:id', updatePortfolioProject);
router.delete('/:id', deletePortfolioProject);

export default router;