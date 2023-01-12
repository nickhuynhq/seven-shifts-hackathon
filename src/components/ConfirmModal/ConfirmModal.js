import './ConfirmModal.scss'
import confirm from '../../assets/images/confirm.gif'
import profileIcon from '../../assets/icons/png/profile_icon.png'
import timeIcon from '../../assets/icons/png/time_icon.png'
import noteIcon from '../../assets/icons/png/note_icon.png'
import {useNavigate} from 'react-router-dom'

function ConfirmModal({setConfirmationModal}) {

  const navigate = useNavigate();
  return (
    <div className='confirm-modal'>
      <div className='confirm-modal__overlay'></div>
      <section className='confirm-modal__modal modal'>
        <h1 className='modal__title'>Booking Confirmation</h1>
        <div className='modal__img-container'>
          <img className='modal__img' src={confirm} alt='gif'/>
        </div>
        <div className='modal__description'>
          <div className='modal__employee'>
            <img className='modal__icon' src={profileIcon} />
            <div className='modal__employee-name'>Sarah Martin</div>
          </div>
          <div className='modal__time'>
            <img className='modal__icon' src={timeIcon} />
            <div className='modal__when'>
              <div className='modal__when-title'>Date and Time</div>
              <div className='modal__when-moment'>August 21, 9:30 AM</div>
            </div>
          </div>
          <div className='modal__request'>
            <img className='modal__icon' src={noteIcon} />
            <div className='modal__info'>
              <div className='modal__info-title'>Request Details</div>
              <div className='modal__info-text'>...I’d like the chance to potentially grow my career opportunities here by training myself in different areas.</div>
            </div>
          </div>
        </div>
        <div className='confirm-modal__confirm' onClick={()=>{navigate('/')}}>Confirm Session</div>
        <div className='confirm-modal__cancel' onClick={()=>{setConfirmationModal(false)}}>Cancel</div>
      </section>
    </div>
  )
}

export default ConfirmModal;