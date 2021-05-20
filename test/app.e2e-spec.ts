import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import {INestApplication, ValidationPipe} from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
        new ValidationPipe({
          whitelist: true,
          forbidNonWhitelisted: true,
          transform: true
        }),
    );
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to my Movie API!');
  });

  describe("/movies", () => {
    it("GET", () => {
      return request(app.getHttpServer())
          .get('/movies')
          .expect(200)
          .expect([]);
    });
    it("POST 201", () => {
      return request(app.getHttpServer())
          .post("/movie")
          .send({
            title: 'Test',
            year: 2000,
            genres: ['test'],
          })
          .expect(201);
    });
    it("POST 400", () => {
      return request(app.getHttpServer())
          .post("/movie")
          .send({
            title: 'Test',
            year: 2000,
            genres: ['test'],
            other: "thing"
          })
          .expect(400);
    });
    it('Delete', () => {
      return request(app.getHttpServer())
          .delete('/movies')
          .expect(404);
    });
  });

  it('/movies (GET)', () => {
    return request(app.getHttpServer())
        .get("/movies")
        .expect(200)
        .expect([{id: 1}]);
  });

  describe('/movies/:id', () => {
    it('GET 200', () => {
      return request(app.getHttpServer())
          .get("/movies/1")
          .expect(200);
    });
    it('GET 404', () => {
      return request(app.getHttpServer())
          .get('/movies/999')
          .expect(404);
    });
    it('PATCH 200', () => {
      return request(app.getHttpServer())
          .patch('/movies/1')
          .send({title:"Updated Test"})
          .expect(200);
    });
    it('DELETE 200', () => {
        return request(app.getHttpServer())
            .delete('/movies/1')
            .expect(200);
    });
  });
});
