import React from 'react';
import * as homePageStyles from './homePage.module.scss';
import CustomTypewriter from "../ReusableComponents/CustomeTypeWriter/CustomTypewriter";
import DefaultGreenBtn from "../ReusableComponents/Buttons/DefaultGreenBtn";
import {StaticImage} from "gatsby-plugin-image";
import RendTrustedSlider from "./sections/RendTrustedSlider/RendTrustedSlider";
import {useStaticQuery, graphql} from 'gatsby'
import RendCommentsSlider from "./sections/RendSlider/RendCommentsSlider";
import RendScoreStars from "../ReusableComponents/RendScoreStars";

const typewriterArr = ['website uptime monitoring', 'page speed checking', 'error & broken page alerts', 'user experience optimisation', 'technical SEO audits', 'vulnerability & security scanning'];
const scoreArr = [2.2, 3.6, 4.5, 5];

const HomePage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //     allFile {
  //       nodes{
  //         name
  //       }
  //     }
  //   }
  // `)
  //
  // console.log(data)
  return (
    <div className={`home_page_inner ${homePageStyles.home_page_div}`}>
      <div className={`title ${homePageStyles.blinking_div}`}>
        <p>Beyond</p>
        <CustomTypewriter textArr={typewriterArr} borderWidth={5}/>
      </div>

      <div className={homePageStyles.getStartedDiv}>
        <div>
          <p style={{fontWeight: 700, margin: '20px 0', fontSize: 24}}>
            Meet Hexometer, your AI sidekick that works 24/7
            to catch problems before they affect your business.
          </p>
          <DefaultGreenBtn
            text={'Get started with our free plan'}
            style={{padding: '14px 42px', fontSize: 16, marginBottom: 20}}
          />

          <p>
            Every day your website can face an increasing range of threats. Server problems, slow landing pages, broken
            links, frustrating mobile experiences, embarrassing spelling mistakes, changing SEO rules, 3rd party
            services breaking, or security issues that put your business at risk.
          </p>

          <p>
            To make matters worse, these issues can linger unnoticed, wasting your ad-budget and costing your business
            lost sales.
          </p>

          <p>
            Hexometer monitors your website 24/7, to catch Availability, Performance, User experience, SEO, Health and
            Security problems, before they affect your customers.
          </p>
        </div>
        <div>
          <StaticImage src={'../../images/dash_screen.png'} alt={'Dash screen'}/>
        </div>
      </div>

      <p className={'title'} style={{textAlign: 'center'}}>
        Trusted by 20,000+ businesses & compatible with over 100+ platforms
      </p>

      <RendTrustedSlider/>

      <div className={homePageStyles.comment_score_div}>
        <div>
          {scoreArr.map((score, index) => (
            <div key={index} className={homePageStyles.score_div}>
              <div>
                <StaticImage src={'../../images/capterra.svg'} alt={''}/>
                <p>{score}/5</p>
              </div>
                <RendScoreStars score={score}/>
            </div>
          ))}
        </div>
        <RendCommentsSlider/>
      </div>
    </div>
  )
};

export default HomePage;
