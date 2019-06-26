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
`;

export default class Events extends React.Component {
  render() {
    return (
      <EventsContainer id="events">
        <div class="column has-text-centered">
          <Heading className="is-size-2 has-text-black">
            OUR PAST EVENTS
          </Heading>
        </div>
        <div class="blog-slider">
          <div class="blog-slider__wrp swiper-wrapper">
            <div class="blog-slider__item swiper-slide">
              <div class="blog-slider__img">
                <img
                  src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                  alt=""
                />
              </div>
              <div class="blog-slider__content">
                <span class="blog-slider__code">19 January 2019</span>
                <div class="blog-slider__title">PyData First Meetup</div>
                <div class="blog-slider__text">
                  Meetup is a planned event where like-minded people meet and
                  typically chat over cocktails and listen to a guest speaker.
                  Organizing one of these events is an excellent way to
                  establish yourself or your business as a "go-to" person in
                  your industry
                </div>
                {/* <a href="#" class="blog-slider__button">
                  READ MORE
                </a> */}
              </div>
            </div>
            <div class="blog-slider__item swiper-slide">
              <div class="blog-slider__img">
                <img
                  src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/jason-leung-798979-unsplash.jpg"
                  alt=""
                />
              </div>
              <div class="blog-slider__content">
                <span class="blog-slider__code">16 Februray 2018</span>
                <div class="blog-slider__title">PyData Second Meetup</div>
                <div class="blog-slider__text">
                  Meetup is a planned event where like-minded people meet and
                  typically chat over cocktails and listen to a guest speaker.
                  Organizing one of these events is an excellent way to
                  establish yourself or your business as a "go-to" person in
                  your industry
                </div>
                {/* <a href="#" class="blog-slider__button">
                  READ MORE
                </a> */}
              </div>
            </div>

            <div class="blog-slider__item swiper-slide">
              <div class="blog-slider__img">
                <img
                  src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg"
                  alt=""
                />
              </div>
              <div class="blog-slider__content">
                <span class="blog-slider__code">23 March 2019</span>
                <div class="blog-slider__title">Pydata Third Meetup</div>
                <div class="blog-slider__text">
                  Meetup is a planned event where like-minded people meet and
                  typically chat over cocktails and listen to a guest speaker.
                  Organizing one of these events is an excellent way to
                  establish yourself or your business as a "go-to" person in
                  your industry
                </div>
                {/* <a href="#" class="blog-slider__button">
                  READ MORE
                </a> */}
              </div>
            </div>
            <div class="blog-slider__item swiper-slide">
              <div class="blog-slider__img">
                <img
                  src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg"
                  alt=""
                />
              </div>
              <div class="blog-slider__content">
                <span class="blog-slider__code">27 April 2019</span>
                <div class="blog-slider__title">Pydata Fourth Meetup</div>
                <div class="blog-slider__text">
                  Meetup is a planned event where like-minded people meet and
                  typically chat over cocktails and listen to a guest speaker.
                  Organizing one of these events is an excellent way to
                  establish yourself or your business as a "go-to" person in
                  your industry
                </div>
                {/* <a href="#" class="blog-slider__button">
                  READ MORE
                </a> */}
              </div>
            </div>
          </div>
          <div class="blog-slider__pagination" />
        </div>
      </EventsContainer>
    );
  }
}
