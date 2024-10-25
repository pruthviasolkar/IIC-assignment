import React from 'react'
import "../dashheader/dashheader.css"
export default function dashheader() {
    return (
        <div>
            <div className='maindashheader '>
                <div className='lefthead'>
                    <div className='btndiv'><button><img src="/Assets/backbtn.png" alt="" /></button></div>
                    <div className='analyticstext'><h2>Account Manager</h2><h3>Analytics</h3></div>
                </div>
                <div className='righthead'>
                    <div className='livediv'>
                        <div className='livemark'></div>
                        <div className='livetext'><h2>Live Now <span>05</span></h2></div>

                    </div>
                    <div className='profilediv'>
                        <div className='leftpro'> <div className='proimg'><img src="/Assets/Elipse 5.png" alt="" /></div>
                            <div className='proname'><h2>Jane Doe</h2><h3>Salesperson</h3></div></div>
                        <div className='rightpro'><div className='proarrowbtn'><button><img src="/Assets/probtn.png" alt="" /></button></div></div>


                    </div>
                </div>



            </div>
            <div className='line'></div>

            <div className='filterbar'>
                <div className='analyticstxt'><img src="/Assets/analytics.png" alt="" /><h4>Analytics</h4></div>
                <div className='filter'><h4>Sort by:</h4><div className='filteroption'><h4>LAST 7 DAYS</h4><img src="/Assets/filter.png" alt="" /></div></div>
                </div>
        </div>
    )
}
