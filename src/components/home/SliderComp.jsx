import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-[#F6F6F6] px-6 max-h-[500px]">
          <div>
            <div className="text-6xl font-bold">En kaliteli ayakkabılar</div>
            <div className="text-lg my-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam at minima omnis sequi esse ab, quas possimus aliquid, nostrum eveniet.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">İncele</div>
          </div>
          <img className="max-w-[700px]" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5f4f502b-dee6-46b3-beba-0ea0118ca3f5/air-max-plus-drift-ayakkab%C4%B1s%C4%B1-h4JFl2.png" alt="" />
        </div>
        <div className="!flex items-center bg-[#F6F6F6] px-6 max-h-[500px]">
          <div>
            <div className="text-6xl font-bold">En kaliteli ayakkabılar</div>
            <div className="text-lg my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam at minima omnis sequi esse ab, quas possimus aliquid, nostrum eveniet.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">İncele</div>
          </div>
          <img className="max-w-[700px]" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b01c67f2-2481-45d7-b383-a1476d768f6e/air-force-1-07-ayakkab%C4%B1s%C4%B1-lkVhs6.png" alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default SliderComp;
