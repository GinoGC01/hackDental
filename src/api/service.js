import { apiRoutes } from './api.routes.js';

export class ApiService {
    static async sendData(info) { 
        try{
            const response = await fetch(apiRoutes.sendData , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            });

            const data = await response.json();
            return data
        } catch (error) {
            console.error('Error sending data:', error);
            throw error;
        }
    }
}