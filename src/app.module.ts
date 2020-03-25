import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { LibroController } from './libro/libro.controller';

@Module({
  imports: [ApiModule],
  controllers: [AppController, LibroController],
  providers: [AppService],
})
export class AppModule {}
