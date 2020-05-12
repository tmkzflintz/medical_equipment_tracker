import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get('all')
  find() {
    return this.locationService.findAll();
  }

  @Get(':id')
  getLocation(@Param('id') id: number) {
    return this.locationService.getLocationById(id);
  }

  @Post('create')
  createLocation(@Body() body) {
    return this.locationService.createLocation(body);
  }

  @Delete(':id')
  deleteLocation(@Param('id') id: number) {
    return this.locationService.deleteLocation(id);
  }
}
