import React, { useState } from 'react'
import { StudentInforUploadPage } from './studentInfroUploadPage'
import { TeacherDataUploadPage } from './teacherDataUploadPage'
import { SuccessPage } from './successPage'
export function InfroCollectMain () {
    const [type, setType] = useState('teacherInfo')
    const changePage = (newtype) => {
        setType(newtype)
    }

    const pageSwitch = (type) => {
        if (type === 'studentInfo') {
            return (
                <StudentInforUploadPage changePage={changePage} />
            )
        } else if (type === 'teacherInfo') {
            return (
                <TeacherDataUploadPage changePage={changePage} />
            )
        } else if (type == 'success') {
            console.log('success')
            return (
                <SuccessPage />
            )
        }
    }
    return (<div>{pageSwitch(type)}</div>)

}