import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataGateway } from './get_way_socket/get_way_socket.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DataGateway],
})
export class AppModule {}
