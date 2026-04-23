import { Request, Response } from 'express';
import { pool } from '../config/db';

export const getAllServiceRequests = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM service_requests ORDER BY id ASC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getServiceRequestById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM service_requests WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'ServiceRequest not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const createServiceRequest = async (req: Request, res: Response) => {
  const data = req.body;
  const keys = Object.keys(data);
  const values = Object.values(data);
  const placeholders = values.map((_, i) => '$' + (i + 1)).join(', ');
  
  try {
    const result = await pool.query(
      'INSERT INTO service_requests (' + keys.join(', ') + ') VALUES (' + placeholders + ') RETURNING *',
      values
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateServiceRequest = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const keys = Object.keys(data);
  const values = Object.values(data);
  
  const setString = keys.map((key, i) => key + ' = $' + (i + 1)).join(', ');
  values.push(id);
  
  try {
    const result = await pool.query(
      'UPDATE service_requests SET ' + setString + ' WHERE id = $' + values.length + ' RETURNING *',
      values
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'ServiceRequest not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteServiceRequest = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM service_requests WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'ServiceRequest not found' });
    }
    res.json({ message: 'ServiceRequest deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};