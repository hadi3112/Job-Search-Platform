import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/Homecards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'


const HomePage = () => {

    const heroData = {
        title: 'Become a React Developer',
        subtitle: 'Find the React job that fits you'
    };
    return (
        <>
            <Hero  title = {heroData.title}  subtitle = {heroData.subtitle}/>
            <HomeCards />
            <JobListings isHome = {true} />
            <ViewAllJobs />
        </>
    )
}

export default HomePage