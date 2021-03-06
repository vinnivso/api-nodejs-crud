import { Request, Response } from "express"
import { GetAllVideoService } from "../services/GetAllVideoService"

export class GetAllVideoController {
  async handler(request: Request, response: Response) {
    const service = new GetAllVideoService()

    const videos = await service.execute()

    return response.json(videos)
  }
}