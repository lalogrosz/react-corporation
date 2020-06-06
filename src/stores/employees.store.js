import { observable, decorate } from "mobx";
import employeeService from "../services/employee.service";

class EmployeesStore {

    
    actualEmployee;
    managers = [];
    loading = true;

    constructor() {
        // At first, loads the root manager
        employeeService.getByManager().then(async ([rootManager]) => {            
            // Then loads his team
            await this.getByManager(rootManager);    
            this.actualEmployee = rootManager;
            this.loading = false;
        });
    }

    /**
     * Cuts the LIFO and sets the manager as actual employee
     */
    backToManager(manager, index) {
        this.managers = this.managers.slice(0, index);
        this.setActualEmployee(manager);
    }    

    setActualEmployee(employee, manager) {

        // Appends the manager and sets the actual employee
        manager && this.managers.push(manager);
        this.actualEmployee = employee;

        // Retrive the employee team only if it has not been loaded yet
        if (!this.actualEmployee.team) {
            this.loading = true;
            this.getByManager(employee).then(() => this.loading = false);
        }
    }

    getByManager(manager) {
        return employeeService.getByManager(manager).then(employes => {
            manager.team = employes;            
        })
    }
}

decorate(EmployeesStore, {    
    actualEmployee: observable,
    managers: observable,
    loading: observable
  });

export default new EmployeesStore();