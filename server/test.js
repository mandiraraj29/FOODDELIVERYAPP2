const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./routes/api');
const axios = require('axios');
const expect = chai.expect;

chai.use(chaiHttp);

// register email: 'mandira@gmail.com', password: 'Password' 
// register  email: 'mandiraraj@gmail.com', password: 'Password'
// register email: 'isha@gmail.com', password: 'Password'
// register email: 'ishu@gmail.com', password: 'Password'
describe('POST /login', () => {
  it('should return a token and user details for valid credentials', (done) => {
    axios.post('http://localhost:8080/api/login', { email: 'mandira@gmail.com', password: 'Password' })
    .then(res => {
      // perform assertions on response
      expect(res.status).to.equal(200);
    expect(res.data).to.have.property('token');
    expect(res.data).to.have.property('username');
    expect(res.data).to.have.property('email');
    expect(res.data).to.have.property('userId');
      done(); // signal test completion
    })
    .catch(error => {
      // handle errors
      done(error); // signal test failure
    });
  });

  it('should return a token and user details for valid credentials', (done) => {
    axios.post('http://localhost:8080/api/login', { email: 'isha@gmail.com', password: 'Password' })
    .then(res => {
      // perform assertions on response
      expect(res.status).to.equal(200);
    expect(res.data).to.have.property('token');
    expect(res.data).to.have.property('username');
    expect(res.data).to.have.property('email');
    expect(res.data).to.have.property('userId');
      done(); // signal test completion
    })
    .catch(error => {
      // handle errors
      done(error); // signal test failure
    });
  });

  it('should return a token and user details for valid credentials', (done) => {
    axios.post('http://localhost:8080/api/login', { email: 'ishu@gmail.com', password: 'Password' })
    .then(res => {
      // perform assertions on response
      expect(res.status).to.equal(200);
    expect(res.data).to.have.property('token');
    expect(res.data).to.have.property('username');
    expect(res.data).to.have.property('email');
    expect(res.data).to.have.property('userId');
      done(); // signal test completion
    })
    .catch(error => {
      // handle errors
      done(error); // signal test failure
    });
  });

  it('should return a token and user details for valid credentials', (done) => {
    axios.post('http://localhost:8080/api/login', { email: 'mandiraraj@gmail.com', password: 'Password' })
    .then(res => {
      // perform assertions on response
      expect(res.status).to.equal(200);
    expect(res.data).to.have.property('token');
    expect(res.data).to.have.property('username');
    expect(res.data).to.have.property('email');
    expect(res.data).to.have.property('userId');
      done(); // signal test completion
    })
    .catch(error => {
      // handle errors
      done(error); // signal test failure
    });
  });
  it('should return an error response when invalid credentials are provided', async () => {
    const invalidCredentials = {
      email: 'invalidemail@test.com',
      password: 'invalidpassword'
    };
  
    try {
      const response = await axios.post('http://localhost:8080/api/login', invalidCredentials);
    } catch (error) {
      expect(error.response.status).to.equal(400);
      expect(error.response.data).to.equal('Email doesn\'t exist!');
    }
  });
  it('should return an error response when invalid credentials are provided', async () => {
    const invalidCredentials = {
      email: 'invalidemail2@test.com',
      password: 'invalidpassword2'
    };
  
    try {
      const response = await axios.post('http://localhost:8080/api/login', invalidCredentials);
    } catch (error) {
      expect(error.response.status).to.equal(400);
      expect(error.response.data).to.equal('Email doesn\'t exist!');
    }
  });
  it('should return an error response when invalid password is provided', async () => {
    const invalidCredentials = {
      email: 'mandira@gmail.com',
      password: 'invalidpassword'
    };
  
    try {
      const response = await axios.post('http://localhost:8080/api/login', invalidCredentials);
    } catch (error) {
      expect(error.response.status).to.equal(400);
      expect(error.response.data).to.equal('Incorrect Password!');
    }
  });
  it('should return an error response when invalid password is provided', async () => {
    const invalidCredentials = {
      email: 'ishu@gmail.com',
      password: 'invalidpassword'
    };
  
    try {
      const response = await axios.post('http://localhost:8080/api/login', invalidCredentials);
    } catch (error) {
      expect(error.response.status).to.equal(400);
      expect(error.response.data).to.equal('Incorrect Password!');
    }
  });
  it('should return an error response when invalid password is provided', async () => {
    const invalidCredentials = {
      email: 'mandiraraj@gmail.com',
      password: 'invalidpassword'
    };
  
    try {
      const response = await axios.post('http://localhost:8080/api/login', invalidCredentials);
    } catch (error) {
      expect(error.response.status).to.equal(400);
      expect(error.response.data).to.equal('Incorrect Password!');
    }
  });
});


describe('Registration API', () => {
  it('Should register a new user and return a token', async () => {
    const response = await axios.post('http://localhost:8080/api/register', {
      email: 'mandira11raj@gmail.com', // change always for new test
      username: 'mandira',
      password: 'Password'
    });

    expect(response.status).to.equal(200);
    expect(response.data.token).to.be.a('string');
    expect(response.data.username).to.equal('mandira');
    expect(response.data.email).to.equal('mandira11raj@gmail.com'); // change
    expect(response.data.userId).to.be.a('string');
  });
  it('Should register a new user and return a token', async () => {
    const response = await axios.post('http://localhost:8080/api/register', {
      email: 'mandira44raj@gmail.com', // change always for new test
      username: 'mandira',
      password: 'Password'
    });

    expect(response.status).to.equal(200);
    expect(response.data.token).to.be.a('string');
    expect(response.data.username).to.equal('mandira');
    expect(response.data.email).to.equal('mandira44raj@gmail.com'); // change
    expect(response.data.userId).to.be.a('string');
  });
  it('Should register a new user and return a token', async () => {
    const response = await axios.post('http://localhost:8080/api/register', {
      email: 'mandira11raj@gmail.com', // change always for new test
      username: 'mandira',
      password: 'Password'
    });

    expect(response.status).to.equal(200);
    expect(response.data.token).to.be.a('string');
    expect(response.data.username).to.equal('mandira');
    expect(response.data.email).to.equal('mandira11raj@gmail.com'); // change
    expect(response.data.userId).to.be.a('string');
  });
  it('Should register a new user and return a token', async () => {
    const response = await axios.post('http://localhost:8080/api/register', {
      email: 'mandira11raj@gmail.com', // change always for new test
      username: 'mandira',
      password: 'Password'
    });

    expect(response.status).to.equal(200);
    expect(response.data.token).to.be.a('string');
    expect(response.data.username).to.equal('mandira');
    expect(response.data.email).to.equal('mandira11raj@gmail.com'); // change
    expect(response.data.userId).to.be.a('string');
  });
  it('Should register a new user and return a token', async () => {
    const response = await axios.post('http://localhost:8080/api/register', {
      email: 'mandira11raj@gmail.com', // change always for new test
      username: 'mandira',
      password: 'Password'
    });

    expect(response.status).to.equal(200);
    expect(response.data.token).to.be.a('string');
    expect(response.data.username).to.equal('mandira');
    expect(response.data.email).to.equal('mandira11raj@gmail.com'); // change
    expect(response.data.userId).to.be.a('string');
  });
  it('should return an error response when already email is provided', async () => {
    const response = await axios.post('http://localhost:8080/api/register', {
      email: 'ishu@gmail.com', // already registered
      username: 'ishu',
      password: 'Password'
    });
  
    try {
      const response = await axios.post('http://localhost:8080/api/register', invalidCredentials);
    } catch (error) {
        expect(error.response.status).to.equal(400);
    }
  });
});

describe('Hotels API', () => {
    it('returns a 304 error code', async () => {
        try{
            const response = await axios.get('http://localhost:4200/hotels', {
        validateStatus: (status) => status === 304
      });
        }
      catch(error){
        expect(error.response.status).to.equal(404);
      }
    });
    it('hotel without sign returns a 304 error code', async () => {
        try{
            const response = await axios.get('http://localhost:4200/api/hotels', {
        validateStatus: (status) => status === 304
      });
        }
      catch(error){
        expect(error.response.status).to.equal(404);
      }
    });
    it('should return 304 when accessed by an authenticated user', async () => {
        // Login to the application and get an access token
        const res1 = await axios.post('http://localhost:8080/api/login', {
          email: 'mandira@gmail.com',
          password: 'Password'
        });
        const accessToken = res1.data.token;
    
        // Make a request to the /hotels API with the Authorization header
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        };
        const res2 = await axios.get('http://localhost:4200/hotels', config);
    
        // Assert that the response status code is 304
        expect(res2.status).toBe(304);
      });
  });

