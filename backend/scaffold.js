const fs = require('fs');
const path = require('path');

const entities = [
  { name: 'user', table: 'users' },
  { name: 'category', table: 'categories' },
  { name: 'service', table: 'services' },
  { name: 'serviceRequest', table: 'service_requests' },
  { name: 'portfolioProject', table: 'portfolio_projects' },
  { name: 'testimonial', table: 'testimonials' },
];

const controllersDir = path.join(__dirname, 'src', 'controllers');
const routesDir = path.join(__dirname, 'src', 'routes');

entities.forEach(ent => {
  const capName = ent.name.charAt(0).toUpperCase() + ent.name.slice(1);
  
  // Controller
  const controllerContent = [
    "import { Request, Response } from 'express';",
    "import { pool } from '../config/db';",
    "",
    "export const getAll" + capName + "s = async (req: Request, res: Response) => {",
    "  try {",
    "    const result = await pool.query('SELECT * FROM " + ent.table + " ORDER BY id ASC');",
    "    res.json(result.rows);",
    "  } catch (error) {",
    "    res.status(500).json({ error: (error as Error).message });",
    "  }",
    "};",
    "",
    "export const get" + capName + "ById = async (req: Request, res: Response) => {",
    "  const { id } = req.params;",
    "  try {",
    "    const result = await pool.query('SELECT * FROM " + ent.table + " WHERE id = $1', [id]);",
    "    if (result.rows.length === 0) {",
    "      return res.status(404).json({ message: '" + capName + " not found' });",
    "    }",
    "    res.json(result.rows[0]);",
    "  } catch (error) {",
    "    res.status(500).json({ error: (error as Error).message });",
    "  }",
    "};",
    "",
    "export const create" + capName + " = async (req: Request, res: Response) => {",
    "  const data = req.body;",
    "  const keys = Object.keys(data);",
    "  const values = Object.values(data);",
    "  const placeholders = values.map((_, i) => '$' + (i + 1)).join(', ');",
    "  ",
    "  try {",
    "    const result = await pool.query(",
    "      'INSERT INTO " + ent.table + " (' + keys.join(', ') + ') VALUES (' + placeholders + ') RETURNING *',",
    "      values",
    "    );",
    "    res.status(201).json(result.rows[0]);",
    "  } catch (error) {",
    "    res.status(500).json({ error: (error as Error).message });",
    "  }",
    "};",
    "",
    "export const update" + capName + " = async (req: Request, res: Response) => {",
    "  const { id } = req.params;",
    "  const data = req.body;",
    "  const keys = Object.keys(data);",
    "  const values = Object.values(data);",
    "  ",
    "  const setString = keys.map((key, i) => key + ' = $' + (i + 1)).join(', ');",
    "  values.push(id);",
    "  ",
    "  try {",
    "    const result = await pool.query(",
    "      'UPDATE " + ent.table + " SET ' + setString + ' WHERE id = $' + values.length + ' RETURNING *',",
    "      values",
    "    );",
    "    if (result.rows.length === 0) {",
    "      return res.status(404).json({ message: '" + capName + " not found' });",
    "    }",
    "    res.json(result.rows[0]);",
    "  } catch (error) {",
    "    res.status(500).json({ error: (error as Error).message });",
    "  }",
    "};",
    "",
    "export const delete" + capName + " = async (req: Request, res: Response) => {",
    "  const { id } = req.params;",
    "  try {",
    "    const result = await pool.query('DELETE FROM " + ent.table + " WHERE id = $1 RETURNING *', [id]);",
    "    if (result.rows.length === 0) {",
    "      return res.status(404).json({ message: '" + capName + " not found' });",
    "    }",
    "    res.json({ message: '" + capName + " deleted successfully' });",
    "  } catch (error) {",
    "    res.status(500).json({ error: (error as Error).message });",
    "  }",
    "};"
  ].join('\\n');

  fs.writeFileSync(path.join(controllersDir, ent.name + 'Controller.ts'), controllerContent);

  // Route
  const routeContent = [
    "import { Router } from 'express';",
    "import {",
    "  getAll" + capName + "s,",
    "  get" + capName + "ById,",
    "  create" + capName + ",",
    "  update" + capName + ",",
    "  delete" + capName + "",
    "} from '../controllers/" + ent.name + "Controller';",
    "",
    "const router = Router();",
    "",
    "router.get('/', getAll" + capName + "s);",
    "router.get('/:id', get" + capName + "ById);",
    "router.post('/', create" + capName + ");",
    "router.put('/:id', update" + capName + ");",
    "router.delete('/:id', delete" + capName + ");",
    "",
    "export default router;"
  ].join('\\n');
  
  fs.writeFileSync(path.join(routesDir, ent.name + 'Routes.ts'), routeContent);
});

console.log('Scaffolding complete!');
