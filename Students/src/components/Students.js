import React, { useState } from 'react';
import data from '../data.json';

import FormStudent from './FormStudent';
import ListStudent from './ListStudent';

function Students() {
  const [ studentListData, setStudents ] = useState(data);

  return (  
    <div>
		<FormStudent studentListData={studentListData} setStudents={setStudents} />
		<ListStudent studentListData={studentListData} setStudents={setStudents} />
    </div>
  );
}

export default Students;