import React from 'react'
import "../rowacards1st/rowcards.css"
export default function Rowcards() {
    return (
        <div>
            <div className='rowcards'>

                <div className='cardgrp1'>

                <div className='performance cardsofrow1'>
                    <div className='leftper'> <h4>Performance</h4><img src="/Assets/meter.png" alt="" /></div>
                    <div className='rightper'> 
                        <div>
                            <div className='arrowtxt'><img src="/Assets/uparrow.png" alt="" /><h3>Positive ratings</h3></div>
                           <div className='arrownum'><h2>1,025</h2></div>
                        </div>
                        <div>
                        <div className='arrowtxt'><img src="/Assets/downarrow.png" alt="" /><h3>Negative ratings</h3></div>
                        <div><h2>367</h2></div>
                        </div>
                    </div>
                </div>
                <div className='invites cardsofrow'>
                    <div className='maincard'> <div className='totaltxt'>
                        <h4>Total Invites</h4>
                    </div>
                    <div className='seconddiv'>
                        <div className='secmajor'>
                            <div className='sec1'>
                                <div className='sec2'><h4>5,687</h4>

                                </div>
                                <div className='sec3'><img src="/Assets/shape.png" alt="" /><h2>20.50%</h2>
                                </div>

                            </div>
                            <div className='subtxtcard'><h3>Compared to <span>4,596 </span>last <br /> month</h3></div>
                        </div>

                        <div className='cardicon'><img src="/Assets/mail.png" alt="" /></div>
                    </div>
                    <div className='lastdivcard'>
                        <h2>Sent: <span>3,257</span>&nbsp; | &nbsp;Accepted: <span>1,987</span></h2>
                    </div></div>
                    
                </div>

                </div>
                

               <div className='cardgrp2'>
               <div className='calls cardsofrow'>
                    <div className='maincard'>
                    <div className='totaltxt'>
                        <h4>Total Calls</h4>
                    </div>
                    <div className='seconddiv'>
                        <div className='secmajor'>
                            <div className='sec1'>
                                <div className='sec2'><h4>7,587</h4>

                                </div>
                                <div className='sec3'><img src="/Assets/shape.png" alt="" /><h2>20.50%</h2>
                                </div>

                            </div>
                            <div className='subtxtcard'><h3>Compared to <span>6,587</span>last <br /> month</h3></div>
                        </div>

                        <div className='cardicon'><img src="/Assets/call.png" alt="" /></div>
                    </div>
                    <div className='lastdivcard'>
                        <div className='lastsubdiv'><img src="/Assets/upcard.png" alt="" /><h2>3,257</h2></div>
                        <div className='lastsubdiv'><img src="/Assets/downcard.png" alt="" /><h2>3,984</h2></div>
                        <div className='lastsubdiv'><img src="/Assets/redmail.png" alt="" /><h2>1,054</h2></div>
                    </div>
                    <div className='lastestdiv'><h2>Avg: <span>120 Secs</span></h2></div>
                    </div>
                    
                </div>



                <div className='chats cardsofrow'>
                    <div className='maincard'><div className='totaltxt'>
                        <h4>Total Chats</h4>
                    </div>
                    <div className='seconddiv'>
                        <div className='secmajor'>
                            <div className='sec1'>
                                <div className='sec2'><h4>8,658</h4>

                                </div>
                                <div className='sec3'><img src="/Assets/shape.png" alt="" /><h2>20.50%</h2>
                                </div>

                            </div>
                            <div className='subtxtcard'><h3>Compared to <span>7,687</span>last <br /> month</h3></div>
                        </div>

                        <div className='cardicon'><img src="/Assets/chat.png" alt="" /></div>
                    </div>
                    <div className='lastdivcard'>
                        <div className='lastsubdiv'><img src="/Assets/upcard.png" alt="" /><h2>3,257</h2></div>
                        <div className='lastsubdiv'><img src="/Assets/downcard.png" alt="" /><h2>3,984</h2></div>
                        <div className='lastsubdiv'><img src="/Assets/redmail.png" alt="" /><h2>1,054</h2></div>
                    </div>
                    <div className='lastestdiv'><h2>Avg: <span>120 Secs</span></h2></div></div>
                    
                </div> </div>
                
            </div>


            <div className='searchbar'>
                <div className='leftsearch'>
                    <div className='visitortxt'><img src="/Assets/person.png" alt="" /><h4>All Visitors</h4>  </div>
                    <div className='mainsearch'> <div className='mainsearchoption'><img src="/Assets/Search.png" alt="" /> <h4>Search for Users</h4></div>
                    </div>
                </div>
                <div className="rightsearch">
                    <div className='date'> <button className='exportbtn'>Export</button><div className='dateoption'><img src="/Assets/chalender.png" alt="" /><h4>Feb 26 - Mar 4</h4></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
