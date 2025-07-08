import React from 'react'
import Navbar from '../components/Navbar'
import StatsCards from '../components/Dashboard/StatsCards';
import MapView from '../components/Dashboard/MapView';
import ChartSection from '../components/Dashboard/ChartSection';
import RecentAlerts from '../components/Dashboard/RecentAlerts';
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className='gap-5 flex flex-col md:flex-row p-5 h-full w-full'>
        <div className='border border-text md:w-[70%] h-fit flex flex-col rounded-b-lg'>
          <section className='z-10 w-full h-100 bg-cyan-500'>
            <MapView />
          </section>

          <section className='w-full'>
            <ChartSection />
          </section>
        </div>

        <div className='w-full md:w-[30%] rounded-lg'>
          <StatsCards />
        </div>
      </div>
      <RecentAlerts />
      <Footer />
    </>
  )
}

export default Dashboard
