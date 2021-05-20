import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
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
    it("POST", () => {
      return request(app.getHttpServer())
          .post("/movie")
          .send({
            title: 'Test',
            year: 2000,
            genres: ['test'],
          })
          .expect(201);
    });
  })

  it('/movies (GET)', () => {
    return request(app.getHttpServer())
        .get("/movies")
        .expect(200)
        .expect([{id: 1}]);
  });

});
