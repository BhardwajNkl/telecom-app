import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './shared/database/database.module';
import { WifiRequestModule } from './modules/new-connection-request/wifi-request.module';

@Module({
  imports: [
    DatabaseModule,
    WifiRequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
