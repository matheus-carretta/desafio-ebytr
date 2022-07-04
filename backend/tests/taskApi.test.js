const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const {
  describe, it, before, after,
} = require('mocha');
const sinon = require('sinon');
const app = require('../src/app');
const { Task } = require('../src/db/models');

chai.use(chaiHttp);

describe('Task API Test', () => {
  describe('POST / Sucess', () => {
    const taskMock = {
      id: 2,
      description: 'Ouvir a rádio ebytr-if',
      status: 2,
    };

    before(() => {
      sinon.stub(Task, 'create').resolves(taskMock);
    });

    after(() => {
      Task.create.restore();
    });

    it('return status 201 and a json with  tasks infos', async () => {
      const response = await chai.request(app).post('/').send({
        description: 'Ouvir a rádio ebytr-if',
        status: 2,
      });

      expect(response).to.have.status(201);
      expect(response.body).to.be.deep.equal(taskMock);
    });
  });

  describe('GET / Sucess', () => {
    const tasksMock = [
      {
        id: 1,
        description: 'Estudar  programação',
        statusId: 1,
        statuses: {
          id: 1,
          name: 'Pendente',
        },
      }];

    before(() => {
      sinon.stub(Task, 'findAll').resolves(tasksMock);
    });

    after(() => {
      Task.findAll.restore();
    });

    it('return status 200 and a json with tasks infos', async () => {
      const response = await chai.request(app).get('/').send();

      expect(response).to.have.status(200);
      expect(response.body).to.be.deep.equal(tasksMock);
    });
  });

  describe('DELETE / Sucess', () => {
    const taskId = 1;

    before(() => {
      sinon.stub(Task, 'destroy').resolves();
    });

    after(() => {
      Task.destroy.restore();
    });

    it('return status 204 and have no body', async () => {
      const response = await chai.request(app).delete(`/:${taskId}`).send();

      expect(response.body).to.be.deep.equal({});
      expect(response).to.have.status(204);
    });
  });

  describe('PUT / Sucess', () => {
    const taskId = 1;
    const taskMock = {
      description: 'Ouvir a rádio ebytr-if',
      status: 3,
    };

    before(() => {
      sinon.stub(Task, 'update').resolves([1]);
    });

    after(() => {
      Task.update.restore();
    });

    it('return status 204 and have no body', async () => {
      const response = await chai.request(app).put(`/:${taskId}`).send(taskMock);

      expect(response).to.have.status(200);
      expect(response.body).to.be.deep.equal([1]);
    });
  });
});
