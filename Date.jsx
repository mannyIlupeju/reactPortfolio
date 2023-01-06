import React from 'react'
import {useEffect} from 'react'
import DateObject from 'react-date-object';

function Date() {
  var date = new DateObject();
  let currentDate = date.format("dddd DD MMMM YYYY");

  return (
      <p className='text-md'>{currentDate}</p>
  )


}

export default Date