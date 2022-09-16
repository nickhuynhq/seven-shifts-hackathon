import './DashboardPage.scss';
import dashboardGraph from '../../assets/images/dashboard_graph.png';
import employee1 from '../../assets/images/employee1.png';
import employee2 from '../../assets/images/employee2.png';
import employee3 from '../../assets/images/employee3.png';
import employee4 from '../../assets/images/employee4.png';
import employee5 from '../../assets/images/employee5.png';
import downArrow from '../../assets/icons/png/vector.png';

function DashboardPage() {

  const staffList = [
    {
      request_icon: employee1,
      request_employee: "Sarah Martin",
      request_time: "9:05 AM",
      request_description: "is requestion a skillbuilding session."
    },
    {
      request_icon: employee2,
      request_employee: "Jack Nicola",
      request_time: "10:24 AM",
      request_description: "is requestion you to rview their availability schedule."
    },
    {
      request_icon: employee3,
      request_employee: "James Tank",
      request_time: "10:50 AM",
      request_description: "is requestion a shift change."
    },
    {
      request_icon: employee4,
      request_employee: "Naz Tayee",
      request_time: "12:55 PM",
      request_description: "is requesting you to review their available schedule"
    },
    {
      request_icon: employee5,
      request_employee: "Daniel Smith",
      request_time: "2:10 PM",
      request_description: "is notifying you of their sick leave"
    },
  ]

  console.log()

  return (
    <>
      <section className='dashboard'>
        <div className='dashboard__container'>
          <h1 className='dashboard__header h1'>Dashboard</h1>
          <div className='dashboard__graphs graphs__container'>
            <div className='graphs__static'>
              <img className='graphs__graph' src={dashboardGraph} alt='graph'/>
            </div>
          </div>
        </div>
        <div className='requests__container'>
          <div className='requests__header'>
            <h1 className='requests__title h1'>Staff Requests</h1>
            <div className='requests__selection'>
              <span className='requests__selection-option'>Show: Skillbuilding</span>
              <img src={downArrow} alt='arrow' />
            </div>
          </div>
          <div className='requests__cards cards'>
            {staffList.map((staff) => {
              return (
                <div className='cards__container'>
                  <img className='cards__icon' src={staff.request_icon} alt='staff image' />
                  <div className='cards__info'>
                    <div className='cards__who-when'>
                      <div className='cards__who'>{staff.request_employee}</div>
                      <div className='cards__when'>{staff.request_time}</div>
                    </div>
                    <div className='cards__description'>{staff.request_description}</div>
                  </div>
                  <div className='cards__button btn'>Show Request</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default DashboardPage;