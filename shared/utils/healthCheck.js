const axios = require('axios');

const services = [
    { name: 'Auth Service', url: 'http://localhost:1625/v2/api/health/health-check' },
    { name: 'TMS Service', url: 'http://localhost:1666/v2/api/health/health-check' },
    { name: 'Notification Service', url: 'http://localhost:1677/v2/api/health/health-check' },
    { name: 'Eureka Service', url: 'http://localhost:1005/actuator/health' }
];

async function checkHealth() {
    console.log('Checking health of services...');
    for (const service of services) {
        try {
            const response = await axios.get(service.url);
            console.log(`${service.name} is healthy:`, response.data);
        } catch (error) {
            console.error(`${service.name} health check failed:`, error.message);
        }
    }
}

checkHealth();
