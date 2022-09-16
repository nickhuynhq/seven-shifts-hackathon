import './DashboardPage.scss';
import dashboardGraph from '../../assets/images/dashboard_graph.png';
import employee1 from '../../assets/images/employee1.png';
import employee2 from '../../assets/images/employee2.png';
import employee3 from '../../assets/images/employee3.png';
import employee4 from '../../assets/images/employee4.png';
import employee5 from '../../assets/images/employee5.png';

function DashboardPage() {

  const staffList = [
    {
      request_icon: employee1,
      request_type: "",
      request_time: "",
      request_description: ""
    },
    {
      request_icon: employee2,
      request_type: "",
      request_time: "",
      request_description: ""
    },
    {
      request_icon: employee3,
      request_type: "",
      request_time: "",
      request_description: ""
    },
    {
      request_icon: employee4,
      request_type: "",
      request_time: "",
      request_description: ""
    },
    {
      request_icon: employee5,
      request_type: "",
      request_time: "",
      request_description: ""
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
          <h1 className='requests__header h1'>Staff Requests</h1>
          <div className='requests__cards cards'>
            {staffList.map((staff) => {
              return (
                <img className='cards__icon' src={staff.request_icon} alt='staff image' />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default DashboardPage;