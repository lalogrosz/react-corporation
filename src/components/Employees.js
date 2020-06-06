import { Breadcrumb, Spin } from 'antd';
import classNames from 'classnames';
import { useObserver } from 'mobx-react';
import React from 'react';

import store from '../stores/employees.store';
import Employee from './Employee';


const Employees = () => useObserver(() => {

    const {managers, loading} = store;
    const employeContentClassNames = classNames(
        'employee-content',
        {
          'employee-content--margin': managers.length === 0,
        }
      );

    
    return (
        <div className="site-layout-content">
            {managers.length > 0 && 
                <Breadcrumb className="breadcrum" separator=">">
                    {managers.map((manager, index) => 
                        <Breadcrumb.Item key="{manager.id}" onClick={() => store.backToManager(manager, index)}>
                            {manager.first} {manager.last}
                        </Breadcrumb.Item>
                    )} 
                </Breadcrumb>
            }
            
            <div className={employeContentClassNames}>                 
                {loading ? <Spin size="large" /> : <Employee />}                    
            </div>
        </div>
    )
        
    

})

export default Employees;