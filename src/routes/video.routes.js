import { Router } from "express";
import { methods as videoController } from "./../controllers/video.controller";

const router = Router();

router.get("/", videoController.getVideos);
router.get("/:id", videoController.getVideo);
router.post("/", videoController.addVideo);
router.put("/:id", videoController.updateVideo);
router.delete("/:id", videoController.deleteVideo);

export default router;