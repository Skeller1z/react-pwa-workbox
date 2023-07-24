import React from 'react'
import DataGrid from 'devextreme-react/data-grid';
import Customer from "./customer.json"
import { TextBox } from "devextreme-react";

const TestMenu = () => {

    const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];
    return (
        <>
            <TextBox
                defaultValue={""}
                placeholder="Please enter a new email address"
                valueChangeEvent="keyup"
            />
            <DataGrid
                dataSource={Customer}
                defaultColumns={columns}
                showBorders={true}
            />
        </>
    )
}

export default TestMenu