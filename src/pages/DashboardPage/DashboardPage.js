import './DashboardPage.scss';
import dashboardGraph from '../../assets/images/dashboard_graph.png';

function DashboardPage() {
  return (
    <section className='dashboard'>
      <div className='dashboard__container'>
        <h1></h1>
        <div className='dashboard__static'>
          <img className='dashboard__graph' src={dashboardGraph} alt='graph'/>
        </div>
      </div>
    </section>
  )
}

export default DashboardPage;