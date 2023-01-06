import React from 'react'
import {useEffect} from 'react'
import DateObject from 'react-date-object';

function Date() {
  var date = new DateObject();
  let currentDate = date.format("dddd, MMMM dd YYYY");

  return (
    <div className='w-full'>
      <p className='text-sm'>{currentDate}</p>
    </div>
  )


}

export default Date