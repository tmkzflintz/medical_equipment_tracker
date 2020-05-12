import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  findAll(): Promise<Location[]> {
    return this.locationRepository.find();
  }

  getLocationById(id: number) {
    return this.locationRepository
      .createQueryBuilder('location')
      .where(`location.id = '${id}'`)
      .getOne();
  }

  createLocation(data: Location) {
    const location = new Location();
    location.created_at = new Date();
    location.updated_at = new Date();
    return this.locationRepository.save(location);
  }
  
  deleteLocation(id: number) {
    return this.locationRepository
      .createQueryBuilder('location')
      .delete()
      .where(`location.id = '${id}'`)
      .execute();
  }

}
