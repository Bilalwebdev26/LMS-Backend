import type { Request, Response } from 'express';
export const getAllCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    return res.status(200).json({ message: name });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }

    return res.status(500).json({ message: 'Unknown error' });
  }
};
