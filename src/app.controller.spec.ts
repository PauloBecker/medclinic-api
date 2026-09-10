import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { strict as assert } from 'node:assert';
import { beforeEach, describe, it } from 'node:test';

void describe('AppController', () => {
  let appController: AppController;

  void beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  void describe('root', () => {
    void it('should return "Hello World!"', () => {
      assert.equal(appController.getHello(), 'Hello World!');
    });
  });
});
