import react from 'react'
import FeedbackCard from "./FeedbackCard";
import Carousel from "nuka-carousel";
import sam from '../assets/sam.jpg'

const feedback = [
  {
    id: "feedback-1",
    content:
      "One of the best logisitics company i have used. Delivery was fast and smooth",
    name: "Herman Jensen",
    img: sam,
  },
  {
    id: "feedback-2",
    content:
    "One of the best logisitics company i have used. Delivery was fast and smooth",
    name: "Steve Mark",
    img: sam,
  },
  {
    id: "feedback-3",
    content:
    "One of the best logisitics company i have used. Delivery was fast and smooth",
    name: "Kenn Gallagher",
    img: sam,
  },
];

const Testimonials = () => (
  <section
    id="clients"
    className={`sm:py-16 py-6 flex justify-center items-center flex-col relative bg-white`}
  >

    <Carousel autoplay autoplayInterval={3000} wrapAround={true}>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </Carousel>
  </section>
);

export default Testimonials;
