import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListaModule } from './lista/lista.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      /* Local */
      // type: 'mysql',
      // host: 'localhost',
      // port: 3306,
      // username: 'root',
      // password: 'Jobara123',
      // database: 'lista-prueba',
      /* Clever-Cloud */
      type: 'mysql',
      host: 'bs0bivedcuimbr1vtslq-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'ujtahbqmmxxh02dv',
      password: 'nBfUPTPFyJbRAkpUAvtp',
      database: 'bs0bivedcuimbr1vtslq',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // En true crea la tabla, luego pasar a false para que no borre lo cargado en la tabla
    }),    
    ListaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
