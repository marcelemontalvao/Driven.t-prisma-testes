import { AuthenticatedRequest } from '@/middlewares';
import hotelsService from '@/services/hotels-service';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function getAllHotels(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req.userId;
    const hotels = await hotelsService.getAllHotels(userId);
    return res.status(httpStatus.OK).send(hotels);
  } catch (error) {
    if (error.name === 'NotFound') {
      return res.status(httpStatus.NOT_FOUND).send({});
    } else if (error.name === 'InvalidDataError') return res.status(406).send(httpStatus['406_MESSAGE']);
  }
}
