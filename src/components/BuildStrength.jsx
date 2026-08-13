import "./BuildStrength.css";

const items = [
  {
    title: "Strengthening",
    text: "Enhance your muscle power with targeted strengthening exercises. Our facility is equipped to help you build and tone your muscles effectively.",
  },
  {
    title: "Cardio Training",
    text: "Boost your cardiovascular health and burn calories with a variety of cardio machines, including treadmills, ellipticals, and stationary bikes.",
  },
  {
    title: "Weight Loss Programs",
    text: "Achieve your weight loss goals with customized programs that combine cardio, strength training, and nutrition guidance.",
  },
  {
    title: "Weight Gain Programs",
    text: "Structured weight gain programs designed to help you bulk up and build muscle mass through targeted exercises and nutrition.",
  },
  {
    title: "Personal Training",
    text: "Receive personalized workout plans with one-on-one guidance from our certified trainers, designed to help you achieve your fitness goals.",
  },
  {
    title: "Treadmills: Our Specialty",
    text: "With our specialty in treadmills, achieve your cardio and endurance goals efficiently with the best equipment available.",
  },
  {
    title: "Ladies & Gents Fitness Centre",
    text: "Separate fitness sessions for men and women, ensuring a comfortable and motivating workout environment for everyone.",
  },
  {
    title: "Bodybuilding Programs",
    text: "Join our bodybuilding programs to build muscle and strength with tailored routines, expert guidance, and advanced techniques.",
  },
  {
    title: "Yoga & Flexibility Training",
    text: "Improve your flexibility and balance through guided yoga sessions that help with relaxation, mobility, and core strength.",
  },
  {
    title: "Nutritional Guidance",
    text: "Receive expert nutritional advice to complement your fitness goals. Our specialists will create meal plans that align with your fitness journey.",
  },
];

export default function BuildStrength() {
  return (
    <section className="strength" id="workflow">
      <div className="container strength__inner">
        <h2 className="strength__title">
          Build Your Strength with <span>JBS Gym</span>
        </h2>

        <div className="strength__body">
          <div className="strength__media">
            <div className="strength__poster">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=80"
                alt="Muscular man crouching in the gym, poster style"
              />
              <div className="strength__poster-tag strength__poster-tag--top">
                Nutrition Solutions
              </div>
              <div className="strength__poster-tag strength__poster-tag--open">
                Open 24/7
              </div>
              <div className="strength__poster-tag strength__poster-tag--side">
                Personal Trainers
              </div>
              <div className="strength__poster-word">GYM</div>
              <div className="strength__poster-sub">
                Best Fitness Place For Workout
              </div>
            </div>

            <div className="strength__poster strength__poster--secondary">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&q=80"
                alt="Woman lifting a barbell, poster style"
              />
              <div className="strength__poster-headline">
                GET FIT
                <br />
                <span>GET GOING</span>
              </div>
              <div className="strength__poster-strip">
                <div>
                  <strong>Weight Lifting</strong>
                  <span>Lorem ipsum dolor consectetur</span>
                </div>
                <div className="is-accent">
                  <strong>Personal Training</strong>
                  <span>Lorem ipsum dolor consectetur</span>
                </div>
                <div>
                  <strong>Body Building</strong>
                  <span>Lorem ipsum dolor consectetur</span>
                </div>
              </div>
            </div>
          </div>

          <ul className="strength__list">
            {items.map((item) => (
              <li key={item.title}>
                <span className="strength__check">✓</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
