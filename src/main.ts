import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.enableCors(); Abre a todas las ip y a todos los metodos
  //await app.listen(3000);


  app.enableCors( {
    origin:['http://localhost:3000'], // puerto del front
    methods : 'GET, PUT, POST, DELETE, PATH', 
    credentials: true
  });
  await app.listen(3001); // puerto del back
}
bootstrap();
