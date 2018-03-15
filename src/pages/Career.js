import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import Breadcrumb from "../components/elements/Breadcrumb";
import image from "../images/career.svg";
import Card from "../components/elements/Card";
import jobs from "../data/jobs";
import "./../styles/css/Global.css";
import "./../styles/css/Career.css";

class Career extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
        component="div"
        className="career-container"
      >
        <div className="career">
          <div className="career-content">
            <Breadcrumb title={"Who we are looking for"} />
            <h2>We are looking for team mates, not employees.</h2>
            <p>Currently, we are looking for:</p>
            <div className="card-row">
              {jobs.map(job => (
                <Card
                  icon={job.icon}
                  heading={job.heading}
                  description={job.description}
                />
              ))}
            </div>
            <h5>Our core values:</h5>
            <ul className="values-list">
              <li className="value"><strong><i class="em em-hearts" />Empathy</strong></li>
              <li className="value"><strong><i class="em em-hammer_and_wrench" />Expertise</strong></li>
              <li className="value"><strong><i class="em em-fire" />Ambition</strong></li>
              <li className="value"><strong><i class="em em-nerd_face" />Curiosity</strong></li>
              <li className="value"><strong><i class="em em-rolling_on_the_floor_laughing" />Cheerfulness</strong></li>
              <li className="value"><strong><i class="em em-star2" />Creativity</strong></li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis rem commodi molestias maiores molestiae dicta dolore minus, voluptates fuga modi explicabo doloremque quidem aut corrupti quis, cumque optio aperiam illum illo est alias. Soluta, exercitationem! Eum distinctio dolor possimus.</p>
            <h5>Interested? Drop us a message.</h5>
            <a className="career-email" href="">career@codefuly.com</a>
          </div>
          <div className="career-image-container">
          <img className="career-image" src="https://images.pexels.com/photos/296881/pexels-photo-296881.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb" alt="" />
          <img className="career-image" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg?h=350&dpr=2&auto=compress&cs=tinysrgb" alt="" />
          <img className="career-image" src="https://images.pexels.com/photos/515169/pexels-photo-515169.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb" alt="" />
          </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}

// <table className="values-table-container">
// <tbody className="values-table">
//   <tr className="values-table-row">
//     <td className="value"><i class="em em-hearts" />Empathy</td>
//     <td className="value"><i class="em em-hammer_and_wrench" />Expertise</td>
//   </tr>
//   <tr className="values-table-row">
//     <td className="value"> <i class="em em-fire" />Ambition</td>
//     <td className="value"><i class="em em-nerd_face" />Curiosity</td>
//   </tr>
//   <tr className="values-table-row">
//     <td className="value"><i class="em em-rolling_on_the_floor_laughing" />Cheerfulness</td>
//     <td className="value"><i class="em em-star2" />Creativity</td>
//   </tr>
// </tbody>
// </table>

export default Career;
