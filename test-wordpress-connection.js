const fetch = require('node-fetch');

// GraphQL endpoint
const endpoint = 'https://psicologiacontenidos.wordpress.com/graphql';

// GraphQL query
const query = `
  query {
    generalSettings {
      title
      description
    }
    posts(first: 1) {
      nodes {
        title
        slug
      }
    }
  }
`;

// Test without custom headers
async function testWithoutHeaders() {
  console.log('Testing GraphQL endpoint without custom headers...');
  
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    
    console.log('Response status:', response.status);
    console.log('Response URL:', response.url);
    
    if (response.url !== endpoint) {
      console.log('❌ REDIRECT DETECTED! The request was redirected.');
    }
    
    const data = await response.text();
    console.log('Response body:', data.substring(0, 200) + '...');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Test with custom headers
async function testWithHeaders() {
  console.log('\nTesting GraphQL endpoint with custom headers...');
  
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-GRAPHQL-REQUEST': 'true',
      },
      body: JSON.stringify({ query }),
    });
    
    console.log('Response status:', response.status);
    console.log('Response URL:', response.url);
    
    if (response.url !== endpoint) {
      console.log('❌ REDIRECT DETECTED! The request was redirected.');
    } else {
      console.log('✅ NO REDIRECT! The request was not redirected.');
    }
    
    const data = await response.text();
    console.log('Response body:', data.substring(0, 200) + '...');
    
    try {
      const jsonData = JSON.parse(data);
      if (jsonData.data) {
        console.log('✅ VALID GRAPHQL RESPONSE! The response contains valid GraphQL data.');
      } else {
        console.log('❌ INVALID GRAPHQL RESPONSE! The response does not contain valid GraphQL data.');
      }
    } catch (e) {
      console.log('❌ INVALID JSON! The response is not valid JSON.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run tests
async function runTests() {
  await testWithoutHeaders();
  await testWithHeaders();
}

runTests();
