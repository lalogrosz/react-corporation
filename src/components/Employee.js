import React from 'react';
import store from '../stores/employees.store';
import { Card, Descriptions } from 'antd';

export default () => {
    const {actualEmployee, managers} = store;
    const managerIdx = managers.length - 1;
    const manager = managers.length > 0 && managers[managerIdx];
    return (
        <Card title={actualEmployee.first + ' ' +actualEmployee.last}>
            

            <Descriptions bordered>
                <Descriptions.Item label="Department">{actualEmployee.department || 'No department'}</Descriptions.Item>
                <Descriptions.Item label="Office">{actualEmployee.office || 'No office'}</Descriptions.Item>
                <Descriptions.Item label="Direct Manager">{
                    manager ? 
                    <span className="employee-name" onClick={() => store.backToManager(manager, managerIdx)}>{manager.first + ' ' + manager.last}</span> : 
                    'No manager'
                }
                </Descriptions.Item>
                {actualEmployee.team.length > 0 && 
                    <Descriptions.Item label="Team" span={3}>
                    {actualEmployee.team.map(employee => 
                        <div className="employee-name" key={'team' + employee.id} onClick={() => store.setActualEmployee(employee, actualEmployee)}>
                            {employee.first} {employee.last}
                        </div>
                    )}
                    </Descriptions.Item>
                }
            </Descriptions>
            
        </Card>
    )
}