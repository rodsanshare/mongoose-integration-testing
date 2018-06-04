const app = require('../app');
const request = require('supertest');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost/my_test_database';
mongoose.connect(mongoDB);

describe('App test', () => {
    it('has a module', () => {
        expect(app).toBeDefined();
    });
});

let server;

beforeAll(() => {
    server = app.listen(3001);
});

afterAll(done => {
    mongoose.connection.close();
    server.close(done);
});

describe('user routes test', () => {
    it('can list users', async () => {
        await request(server).get('/users').expect(200);
    });

    it('can post users', async () => {
        await request(server).post('/users?name=rodney&birthday=july').expect(200);
    });

    it('fails if name is missing in post users', async () => {
        await request(server).post('/users?birthday=july').expect(500);
    });

    it('fails if birthday is missing in post users', async () => {
        await request(server).post('/users?name=rodney').expect(500);
    });

    it('fails if birthday and user is missing in post users', async () => {
        await request(server).post('/users').expect(500);
    });

    describe('404', () => {
        it('returns 404', async () => {
            await request(server).post('/fail').expect(404);
        });
    });

});