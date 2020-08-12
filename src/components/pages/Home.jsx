import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";
import CarouselSlides from "../common/carouselSlides";
import Logo from "../../images/logo.png";
import ServicesCards from "../servicesCards";
import { getCarouselItemData } from "../../services/services";
import DefualtPageTemplate from "../defualtPageTemplate";

class Home extends Component {
  state = {
    carousel: [],
  };
  componentDidMount() {
    this.setState({ carousel: getCarouselItemData() });
  }

  render() {
    const { carousel } = this.state;
    const title="خانه"
    const description = `شروع داستان موفقيت ما به اوایل دهه هشتاد برميگردد، در آن سالها
    بنيانگزاران شركت دریافتند که با توجه به افزایش حجم فعاليت هاي شان
    و به دليل درخواست مشتريان و نیز حضور موثرتر در بازار IT كشور،
    ضرورت ادامه فعالیت به صورت حقیقی با محدویت هایی همراه بوده و نیاز
    است که واحدی حقوقی برای ادامه حضور موفق در بازار ایجاد شود لذا
    اقدامات لازم صورت پذیرفته و و اين مهم در اواخر تابستان سال ۱۳۸۲
    واقع و شركت سامانه ورز هزاره متولد شد.
  `;
    return (
      <section>
        <DefualtPageTemplate
          carouselData={carousel}
          pageImage={Logo}
          title={title}
          description={description}
        />
        <ServicesCards />
        
      </section>
    );
  }
}

export default Home;
