import React, { useState } from 'react'
import Form from '../Forms/Form';
import DynamicTable from '../Forms/DynamicTable';


const Bank = () => {

    const [banks, setBanks] = useState([]);
    const [currentBank, setCurrentBank] = useState(null);

    const formFields = [
        { id: 'bankName', label: 'Bank Name', type: 'text' },
        { id: 'sn', label: 'Short Name of Bank', type: 'text' },
    ];


  return (
    <div className="row">
        <div className="col-lg-5">
            <Form
                title={currentBank !== null ? 'Edit Bank' : 'Add New Bank'}
                fields={formFields}
                initialData={currentBank !== null ? banks[currentBank] : {}}
                data={banks}
                setData={setBanks}
                currentDataIndex={currentBank}
                setCurrentDataIndex={setCurrentBank}
            />
        </div>

        <div className="col-lg-7"> 
            <DynamicTable
                data={banks}
                fields={formFields}
                setData={setBanks}
                setCurrentDataIndex={setCurrentBank}
            />
        </div>
    </div>
  )
}

export default Bank