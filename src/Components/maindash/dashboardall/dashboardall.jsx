import React from 'react'
import Dashheader from '../dashheader/dashheader'
import "../dashboardall/dashboardall.css"
import Rowcards from '../rowacards1st/rowcards'
import Tabledash from '../dashtable/table'
import PerformanceMeter from '../performancemeter/performance'
export default function Dashboardall() {
  return (
    <div className='container1'>
      <Dashheader/>
      <Rowcards/>
      <Tabledash/>
      
    </div>
  )
}
