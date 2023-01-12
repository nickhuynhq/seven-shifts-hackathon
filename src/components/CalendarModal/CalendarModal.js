import React from 'react'
import "./CalendarModal.scss"
import ProfilePic from "../../assets/images/profile.png"
import { useState } from 'react'
import ConfirmModal from "../ConfirmModal/ConfirmModal"

const CalendarModal = () => {

  const [isApproved, setIsApproved] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(false)
  const [calendarBlock, setCalendarBlock] = useState(false)

  const handleApproveButton = () => {
    setIsApproved(true);
  }
  const handleCalendarClick = () =>{
    setCalendarBlock(true);
  }
  const handleCalendarConfirm = () => {
    setConfirmationModal(true);
  }

  return (
    <>
    {confirmationModal && <ConfirmModal setConfirmationModal={setConfirmationModal}/>}
     <div className="calendar-modal-main">
      <div className="calendar-modal">
        <section className="calendar-modal__employee-card">
          <img className="employee-card__image" src={ProfilePic} alt="employee"/>
          <div className="employee-card__details">
              <h2>Sarah Martin</h2>
              <p>Server</p>
              <div className="employee-card__details-middle">
                <div className="employee-card__level-list">
                  <div className="employee-card__level"> 1 </div>
                  <div className="employee-card__level"> 2 </div>
                  <div className="employee-card__level--invalid">  </div>
                  <div className="employee-card__level--invalid">  </div>
                </div>
                <div>
                  <button className={isApproved ? "calendar-modal__button--inactive" : "calendar-modal__button"} onClick={handleApproveButton}>{isApproved ? "Approved": "Approve"}</button>
                  <button className="calendar-modal__button--inactive">Pending Request</button>
                </div>    
              </div>
              <h3>Request Training Details</h3>
              <p className="employee-card__description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </section>
        <section className="calendar-modal__calendar">
          <div className="calendar-modal__calendar-top">
            <h2 className="calendar__title">Requested Time</h2>
            <button className={calendarBlock ? "calendar-modal__button" : "calendar-modal__button--inactive"} onClick={handleCalendarConfirm}>Confirm Time</button>
          </div>
          
          <div className={isApproved ? "calendar" : "calendar--inactive"}>
            <div className="calendar__times">
              <div className="calendar__times-block"></div>
              <div className="calendar__times-block">9:00</div>
              <div className="calendar__times-block">10:00</div>
              <div className="calendar__times-block">11:00</div>
              <div className="calendar__times-block">12:00</div>
              <div className="calendar__times-block">13:00</div>
              <div className="calendar__times-block">14:00</div>
              <div className="calendar__times-block">15:00</div>
              <div className="calendar__times-block">16:00</div>
              <div className="calendar__times-block">17:00</div>
            </div>
            <div className="calendar__body">
              <div className="calendar__heading"> 
                <div className="calendar__heading-block">Mon</div>
                <div className="calendar__heading-block">Tues</div>
                <div className="calendar__heading-block">Wed</div>
                <div className="calendar__heading-block">Thurs</div>
                <div className="calendar__heading-block">Fri</div>
                <div className="calendar__heading-block">Sat</div>
                <div className="calendar__heading-block">Sun</div>
              </div>
              <div className="calendar__body-blocks">
                <div className={calendarBlock ? "calendar__body-block--active--clicked" : "calendar__body-block--active"} onClick={handleCalendarClick}></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block--active"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
              </div>
              <div className="calendar__body-blocks">
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
              </div>
              <div className="calendar__body-blocks">
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
              </div>
              <div className="calendar__body-blocks">
                <div className="calendar__body-block--active"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block--active"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
              </div>
              <div className="calendar__body-blocks">
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
              </div>
              <div className="calendar__body-blocks">
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
              </div>
              <div className="calendar__body-blocks">
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
              </div>
              <div className="calendar__body-blocks">
                
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block--active"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block--active"></div>
                <div className="calendar__body-block"></div>
              </div>
              <div className="calendar__body-blocks">
                <div className="calendar__body-block--active"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block--active" onClick={handleCalendarClick}></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
                <div className="calendar__body-block"></div>
              </div>
            </div>
          </div>
        </section>
    </div>

    <div className='background-blur'></div>

    </div>
    </>
   
    
  )
}

export default CalendarModal