import { prisma } from '@/config';

async function findAllHotels() {
  return prisma.hotel.findMany();
}

async function findHotelById(id: number) {
  return prisma.hotel.findFirst({
    where: {
      id,
    },
  });
}

const hotelsRepository = {
  findAllHotels,
  findHotelById,
};

export default hotelsRepository;
