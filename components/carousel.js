import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="partners-logo">
        <h2 className="text-center">Our Partners</h2>
        <Slider {...settings}>
          <div>
            <img
              width="100px"
              height="100px"
              src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/07/Alibaba-logo.jpg?auto=format&q=60&fit=max&w=930"
            />
          </div>
          <div>
            <img
              width="100px"
              height="100px"
              src=" https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/amazon-current.png?auto=format&q=60&fit=max&w=930"
            />
          </div>
          <div>
            <img
              width="100px"
              height="100px"
              src=" https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/Alphabet_Inc_Logo_2015.svg.png?auto=format&q=60&fit=max&w=930"
            />
          </div>
          <div>
            <img
              width="100px"
              height="100px"
              src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/07/Alibaba-logo.jpg?auto=format&q=60&fit=max&w=930"
            />
          </div>
          <div>
            <img
              width="100px"
              height="100px"
              src=" https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/amazon-current.png?auto=format&q=60&fit=max&w=930"
            />
          </div>
          <div>
            <img
              width="100px"
              height="100px"
              src=" https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/Alphabet_Inc_Logo_2015.svg.png?auto=format&q=60&fit=max&w=930"
            />
          </div>
          <div>
            <img
              width="100px"
              height="100px"
              src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/07/Alibaba-logo.jpg?auto=format&q=60&fit=max&w=930"
            />
          </div>
          <div>
            <img
              width="100px"
              height="100px"
              src=" https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/amazon-current.png?auto=format&q=60&fit=max&w=930"
            />
          </div>
          <div>
            <img
              width="100px"
              height="100px"
              src=" https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/Alphabet_Inc_Logo_2015.svg.png?auto=format&q=60&fit=max&w=930"
            />
          </div>
          <div>
            <img
              width="100px"
              height="100px"
              src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/07/Alibaba-logo.jpg?auto=format&q=60&fit=max&w=930"
            />
          </div>
          <div>
            <img
              width="100px"
              height="100px"
              src=" https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/amazon-current.png?auto=format&q=60&fit=max&w=930"
            />
          </div>
          <div>
            <img
              width="100px"
              height="100px"
              src=" https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/Alphabet_Inc_Logo_2015.svg.png?auto=format&q=60&fit=max&w=930"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
