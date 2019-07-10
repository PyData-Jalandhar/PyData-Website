import React from "react";
import styled from "styled-components";
// import TeamsCard from "../common/TeamsCard";
import "./index.scss";

const EventsContainer = styled.div`
  min-height: 500px;
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
  @media (min-width: 1440px) {
    max-width: 1100px;
  }
  @media (min-width: 1680px) {
    max-width: 1200px;
  }
`;

const Heading = styled.p`
  margin-top: 3rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    margin-top: 4rem;
    margin-bottom: 0;
  }
`;

export default class Events extends React.Component {
  render() {
    return (
      <EventsContainer id="events">
        <div className="column has-text-centered">
          <Heading className="is-size-2 has-text-black">
            Our Past Events
          </Heading>
        </div>
        <div className="blog-slider">
          <div className="blog-slider__wrp swiper-wrapper">
            <div className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img
                  src="https://res.cloudinary.com/dssa0shmr/image/upload/v1561878191/Pydata/Events/firstmeetup_xalvcz.jpg"
                  alt="PyData First Meetup"
                />
              </div>
              <div className="blog-slider__content">
                <span className="blog-slider__code">19 January 2019</span>
                <div className="blog-slider__title">PyData First Meetup</div>
                <div className="blog-slider__text">
                  Meetup is a planned event where like-minded people meet and
                  typically chat over cocktails and listen to a guest speaker.
                  Organizing one of these events is an excellent way to
                  establish yourself or your business as a "go-to" person in
                  your industry
                </div>
                {/* <a href="#" className="blog-slider__button">
                  READ MORE
                </a> */}
              </div>
            </div>
            <div className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img
                  src="https://res.cloudinary.com/dssa0shmr/image/upload/v1561878191/Pydata/Events/secondmeetup_wyoktb.jpg"
                  alt="PyData Second Meetup"
                />
              </div>
              <div className="blog-slider__content">
                <span className="blog-slider__code">16 Februray 2018</span>
                <div className="blog-slider__title">PyData Second Meetup</div>
                <div className="blog-slider__text">
                  Meetup is a planned event where like-minded people meet and
                  typically chat over cocktails and listen to a guest speaker.
                  Organizing one of these events is an excellent way to
                  establish yourself or your business as a "go-to" person in
                  your industry
                </div>
                {/* <a href="#" className="blog-slider__button">
                  READ MORE
                </a> */}
              </div>
            </div>

            <div className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img
                  src="https://res.cloudinary.com/dssa0shmr/image/upload/v1561878191/Pydata/Events/thirdmeetup_f8hdbp.jpg"
                  alt="Pydata Third Meetup"
                />
              </div>
              <div className="blog-slider__content">
                <span className="blog-slider__code">23 March 2019</span>
                <div className="blog-slider__title">Pydata Third Meetup</div>
                <div className="blog-slider__text">
                  Meetup is a planned event where like-minded people meet and
                  typically chat over cocktails and listen to a guest speaker.
                  Organizing one of these events is an excellent way to
                  establish yourself or your business as a "go-to" person in
                  your industry
                </div>
                {/* <a href="#" className="blog-slider__button">
                  READ MORE
                </a> */}
              </div>
            </div>
            <div className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img
                  src= "https://res.cloudinary.com/dssa0shmr/image/upload/v1561878191/Pydata/Events/fourthmeetup_ygwcbp.jpg"
                  alt= "Pydata Fourth Meetup"
                />
              </div>
              <div className="blog-slider__content">
                <span className="blog-slider__code">27 April 2019</span>
                <div className="blog-slider__title">Pydata Fourth Meetup</div>
                <div className="blog-slider__text">
                  Meetup is a planned event where like-minded people meet and
                  typically chat over cocktails and listen to a guest speaker.
                  Organizing one of these events is an excellent way to
                  establish yourself or your business as a "go-to" person in
                  your industry
                </div>
                <a href= "https://www.meetup.com/PyData-Jalandhar/?_xtd=gqFyqTIzNDYwNjkwNKFwp2FuZHJvaWQ&from=ref" 
                target= "blank" className="blog-slider__button">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
          <div className="blog-slider__pagination" />
        </div>
      </EventsContainer>
    );
  }
}
