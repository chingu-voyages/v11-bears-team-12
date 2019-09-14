import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as proxy from 'express-http-proxy';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');

  app.use(
    /^\/(?!(api)).*/,
    proxy('http://localhost:8000', {
      proxyReqPathResolver(req) {
        return req.originalUrl;
      },
    }),
  );
  await app.listen(port);
}
bootstrap();
