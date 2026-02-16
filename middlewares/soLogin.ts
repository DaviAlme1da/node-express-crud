import type { Request, Response, NextFunction } from "express";

export default function soLogin(req: Request, res: Response, next: NextFunction) {

  if(!req.session.usuario){
        return res.render("soLogin"); 
  }
  return next()

}