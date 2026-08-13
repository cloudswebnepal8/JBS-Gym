import "./Features.css";

const features = [
  {
    icon: "🏋️",
    title: "Strength Training",
    text: "Build muscle and increase strength with expert guidance. Our gym is equipped with top-notch equipment to help you push your limits.",
  },
  {
    icon: "🏃",
    title: "Cardio Training",
    text: "Burn calories and improve endurance with our range of cardio machines, including treadmills, bikes, and more.",
  },
  {
    icon: "⚖️",
    title: "Weight Loss Programs",
    text: "Customized workout plans designed specifically for weight loss, helping you shed those extra pounds effectively.",
  },
  {
    icon: "📈",
    title: "Weight Gain Programs",
    text: "Our fitness experts can help you with structured plans to build muscle mass and achieve your weight gain goals.",
  },
  {
    icon: "🧑‍🏫",
    title: "Personal Training",
    text: "One-on-one personal training sessions with certified trainers to guide you through tailored workout plans and help you stay on track.",
  },
  {
    icon: "🏃‍♂️",
    title: "Specialized Treadmill Workouts",
    text: "Treadmills are our specialty! Get the best results with guided treadmill workouts, helping you improve cardiovascular health and stamina.",
  },
  {
    icon: "🚹🚺",
    title: "Ladies & Gents Fitness Centre",
    text: "We offer separate fitness sessions for men and women, ensuring a comfortable and motivating environment for everyone.",
  },
  {
    icon: "❄️",
    title: "Fully Air-Conditioned Gym",
    text: "Workout in a cool, comfortable environment with our fully air-conditioned gym, ensuring a pleasant experience during every session.",
  },
  {
    icon: "🏃",
    title: "Treadmills: Our Specialty",
    text: "Treadmills are one of our specialties. Experience high-quality treadmills designed to help you achieve your cardio and endurance goals.",
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features__head">
          <span className="eyebrow">Feature</span>
          <h2 className="features__title">
            Unlock Your Fitness Potential with{" "}
            <span className="features__accent">Our Gym Services</span>
          </h2>
        </div>

        <div className="features__grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-card__icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
