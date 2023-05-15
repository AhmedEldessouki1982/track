import React from 'react';
import { Checkbox } from 'rsuite'
import TrashIcon from '@rsuite/icons/Trash';
import EditIcon from '@rsuite/icons/Edit';

function TaskItem() {

    //styling compoinent icons
    const IconTrash =({color, size}) => <TrashIcon style={{ color, fontSize: size, cursor:'pointer' }}/>
    const IconEdit =({color, size}) => <EditIcon style={{ color, fontSize: size, cursor:'pointer' }}/>

  return (
    <div className='w-96 h-36 border border-red rounded-xl flex justify-between p-1'>
        {/*left side */}
        <div className="flex items-center mb-4">
            <Checkbox />
        </div>



        {/*right side*/}
        <div className='flex flex-col gap-5 mt-3 mr-2'>
            <IconTrash color = {"yellow"} size={"23px"}/>
            <IconEdit color = {"yellow"} size={"23px"}/>
        </div>
    </div>
  )
}

export default TaskItem