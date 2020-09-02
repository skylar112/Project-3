import React, { Component } from "react";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
const items = [
  {
    src:
      "https://di-uploads-pod5.dealerinspire.com/waltersmercedesbenz/uploads/2017/08/2018-e-coupe-exterior.jpg",
    altText: "Mercedes",
    caption: "Mercedes",
    className: "img-fluid ",
  },
  {
    src:
      "https://www.giochidifabry.it/wp-content/uploads/2020/01/header_modellismo_lamborghini_collection-1.jpg",
    altText: "Lamborghini",
    caption: "Aventador SV Roadster",
  },
  {
    src:
      "https://porschecentrekelowna.ca/images/dealer_images/758/custom/911_Model_Line_Up/634533c37230acb985f4d8bcbfc6f850.jpg",
    altText: "",
    caption: "Porsche",
  },
  {
    src:
      "https://dkc37zh27ftbs.cloudfront.net/wp-content/uploads/2018/05/30232623/2017-honda-civic-coupe.jpg",
    altText: "",
    caption: "Honda",
  },
  {
    src:
      "https://keysforcarsberkeley.com/wp-content/uploads/2016/11/Car-Logos-With-Background-1-1600x400-80.jpg",
    altText: "",
    caption: "Honda",
  },

  {
    src:
      "https://i.pinimg.com/originals/3d/5c/2c/3d5c2c305a99f585658fd260122ec111.jpg",
    altText: "",
    caption: "Ferrari",
  },
];
class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  onExiting() {
    this.animating = true;
  }
  onExited() {
    this.animating = false;
  }
  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }
  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }
  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img
            src={item.src}
            alt={item.altText}
            className="d-block img-fluid w-100 h-100"
          />
          <CarouselCaption captionText={item.caption} />
        </CarouselItem>
      );
    });
    return (
      <div>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}

export default Jumbotron;
