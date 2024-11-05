import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import TopSection from "./TopSection";
import SecondSection from "./SecondSection";
import CourseCategories from "./CourseCategories";
import WebMasterDetails from "./WebMasterDetails";
import LastRow from "./LastRow";
import StudentComments from "./StudentComments";
import HorisontalImage from "./HorisontalImage";

const Home = () => {
  const StudentDetails = [
    {
      name: "Lily Grace",
      text: "Web Masters' HR Mastery course has been instrumental in shaping my understanding of human resource management. The in-depth coverage of HR practices, policies, and talent management strategies have empowered me to lead effectively in the workplace.",
      image: "assets/first.jpeg",
    },
    {
      name: "Oliver Jack",
      text: "Joining Web Masters' Marketing Mastery course expanded my knowledge of digital marketing strategies and analytics. The actionable techniques I learned enabled me to drive results in real campaigns. Web Masters is the catalyst that fueled my marketing career.",
      image: "assets/second.jpeg",
    },
    {
      name: "Lucy Mae",
      text: "Web Masters' Graphic Design course was a turning point for my creativity. The hands-on projects and expert-led workshops taught me how to transform ideas into stunning visual designs. It’s more than just a course it’s a creative journey that unlocks your potential.",
      image: "assets/third.jpeg",
    },
    {
      name: "Leo David",
      text: "Web Masters' Business Studies course was a transformative experience for my entrepreneurial mindset. The in-depth case studies and real-world applications gave me a solid foundation in business strategy, financial management, and leadership skills. Thank you Web Masters.",
      image: "assets/forth.jpeg",
    },
    {
      name: "Olivia-Faith",
      text: "Web Masters Computer Science course ignited my passion for technology. The practical coding sessions and immersive projects helped me develop critical programming skills, and I gained hands-on experience in algorithms, data structures, and software development.",
      image: "assets/fifth.jpeg",
    },
  ];

  const courseCategories = [
    {
      imgSrc: "/assets/GraphicDesign.jpeg",
      altText: "Graphic Design",
      title: "Graphic Design",
      coursesCount: "22",
    },
    {
      imgSrc: "/assets/Content Writing.jpeg",
      altText: "Content Writing",
      title: "Content Writing",
      coursesCount: "10",
    },
    {
      imgSrc: "/assets/Business.jpeg",
      altText: "Business",
      title: "Business",
      coursesCount: "15",
    },
    {
      imgSrc: "/assets/Marketing.jpeg",
      altText: "Marketing",
      title: "Marketing",
      coursesCount: "10",
    },
    {
      imgSrc: "/assets/Technology.jpeg",
      altText: "Technology",
      title: "Technology",
      coursesCount: "10",
    },
    {
      imgSrc: "/assets/Hr.jpeg",
      altText: "HR & Leadership",
      title: "HR & Leadership",
      coursesCount: "15",
    },
  ];

  const WMDetails = [
    {
      heading: "2000+ Premium Courses",
      description:
        "Choose from a vast collection of courses on all sorts of topics",
    },
    {
      heading: "Study Anytime & Anywhere",
      description:
        "Our courses are completely flexible and accessible from any device, from anywhere.",
    },
    {
      heading: "Support From Expert Instructors",
      description:
        "You get tutor support with every course to guide you in every step of the way.",
    },
  ];

  return (
    <div className="container-fluid">
      <div>
        <TopSection />
      </div>

      <div>
        <SecondSection />
      </div>

      <div className="row" style={{ height: "80vh" }}>
        <div
          className="col-12 fw-bold fs-1 d-flex justify-content-center align-items-center"
          style={{ color: "#191970" }}
        >
          Course Categories
        </div>

        <div
          className="col-12"
          style={{
            fontWeight: "500",
            color: "#71797E",
            textAlign: "center",
          }}
        >
          These companies release their own versions of the operating systems
          with minor changes,
          <br />
          and yet always with the same bottom line.
        </div>

        <div className="row d-flex justify-content-center align-items-start">
          {courseCategories.map((course, index) => (
            <CourseCategories
              key={index}
              imgSrc={course.imgSrc}
              altText={course.altText}
              title={course.title}
              coursesCount={course.coursesCount}
            />
          ))}
        </div>
      </div>

      <div className="row" style={{ height: "100vh" }}>
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
          <img
            src="/assets/uniGirl.png"
            alt="Uni Girl"
            style={{
              width: "60%",
              height: "auto",
              maxWidth: "600px",
            }}
          />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start align-items-center">
          <WebMasterDetails
            title="Find Out Why You Should Learn With Us"
            subtitle="We offer accredited online courses that are available for anyone wishing to acquire new skills and gain professional certification to take their career to the next level."
            courseDetails={WMDetails}
          />
        </div>
      </div>

      <div>
        <StudentComments
          items={StudentDetails}
          backgroundImage="/assets/dotImage.jpeg"
        />
      </div>

      <div>
        <HorisontalImage
          imgSrc="/assets/horisontalPic.jpeg"
          message="Bring your career on the right track"
          subMessage="Start today!"
          bgColor="#EDEADE"
          textColor="white"
          height="40vh"
        />
      </div>

      <div>
        <LastRow
          logoSrc="/assets/Logo.png"
          companyName="WEB MASTERS"
          description="Proper education with success"
          address="3645 Maud Street, Newcastle, Delaware-19720"
          facebookUrl="https://www.facebook.com"
          linkedinUrl="https://www.linkedin.com"
          twitterUrl="https://www.twitter.com"
          firstTitle="Help Links"
          firstLinks={[
            "Home",
            "About",
            "All Courses",
            "Events",
            "Terms of use",
            "Contact",
          ]}
          secondTitle="Important Links"
          secondLinks={["Free Courses", "Our Blogs"]}
          thirdTitle="Contact Us"
        />
      </div>
    </div>
  );
};

export default Home;
