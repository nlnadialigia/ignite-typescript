import { Request, Response } from 'express';
import createCourseService from './createCourseService';

export function createCourse(request: Request, response: Response) {
  createCourseService.execute({
    name: 'Nodejs',
    educator: 'Dani',
    duration: 10
  });

  createCourseService.execute({
    name: 'Reactjs',
    educator: 'Diego',
  });

  return response.json({ message: 'cadastros criados com sucesso' });
};


