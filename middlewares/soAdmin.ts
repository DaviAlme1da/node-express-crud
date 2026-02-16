import type { Request, Response, NextFunction } from "express";

export default function soAdmin(req: Request, res: Response, next: NextFunction) {

  if (!req.session.usuario) {
    return res.status(401).render("soAdm");
  }

  if (Number(req.session.usuario.idPerfil !== 1)) {
    return res.status(403).render("soAdm");
  }

  return next()
}