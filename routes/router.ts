import { Router, Request, Response } from "express";

const router = Router();
router.get("/mensajes", (req: Request, res: Response) => {
  res.json({
    ok: true,
    mensaje: "Todo esta bien!!"
  });
});

router.post("/mensajes", (req: Request, res: Response) => {
  const cuerpo = req.body.cuerpo;
  const de = req.body.de;

  res.json({
    ok: true,
    mensaje: "Todo esta bien desde post!!",
    cuerpo,
    de
  });
});

router.post("/mensajes/:id", (req: Request, res: Response) => {
  // PARAMS, VIENEN POR EL URL
  const id = req.params.id;

  const cuerpo = req.body.cuerpo;
  const de = req.body.de;

  res.json({
    ok: true,
    mensaje: "Todo esta bien desde post!!",
    cuerpo,
    de,
    id
  });
});

export default router;
