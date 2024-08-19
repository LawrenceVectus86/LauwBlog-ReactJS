import {useEffect} from 'react'
import Layout from '../../Components/Layout/Layout'
import HeroSection from '../../Components/heroSection/HeroSection'
import BlogPostCard from '../../Components/blogPostCard/BlogPostCard'
// import Loader from '../../Components/Loader/Loader'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <HeroSection/>
      <BlogPostCard/>
    </Layout>
  )
}

export default Home