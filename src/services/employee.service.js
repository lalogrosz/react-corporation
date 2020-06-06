import http from "./http";

class EmployeeService {

    getByManager(manager) {
        const managerId = manager ? manager.id : process.env.REACT_APP_ROOT_MANAGER;
        return http.get('EmployeesChart-Api/?manager=' + managerId).then(results => {
            return results.data.map(employee => {
                return {
                    ...employee,
                    team: null                    
                }
            });
        })
    }
}

export default new EmployeeService();