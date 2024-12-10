import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
// class Logger {
//   log(name: string) {
//     console.log(`Hello ${name}`);
//   }
// }

// class Greet {
//   constructor(private readonly logger: Logger) {}

//   sayHi(name: string) {
//     this.logger.log(name);
//   }
// }

// const greet = new Greet(new Logger());

// greet.sayHi('Sobitjon');
