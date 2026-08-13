import "./Achievements.css";

const stats = [
  { value: "50+", label: "Active Members" },
  { value: "30+", label: "Gym Equipment" },
  { value: "10+", label: "Treadmills" },
];

const testimonials = [
  {
    text: "JBS Gym has been a life-changing experience for me. The facilities are top-notch, and the trainers have helped me achieve my fitness goals faster than I expected. Highly recommend it to anyone serious about fitness!",
    name: "Rahul Mehta",
    role: "Private Job Worker",
  },
  {
    text: "As someone with a busy schedule, I appreciate how the trainers at JBS Gym customize workout plans to fit my needs. The 24/7 access to the gym makes it easy for me to work out whenever I find time. The personal training sessions are incredibly effective.",
    name: "Anita Sharma",
    role: "Bank Manager",
  },
  {
    text: "I've tried several gyms, but JBS Gym stands out for its excellent equipment and knowledgeable trainers. I've made great progress with their weight loss programs, and the atmosphere is always motivating.",
    name: "Vikas Reddy",
    role: "Local Business Owner",
  },
  {
    text: "Joining JBS Gym has been one of the best decisions for my health. The gym is always clean, well-maintained, and the staff is very supportive. The group fitness classes have been a lot of fun and have helped me stay consistent with my fitness journey.",
    name: "Priya Kapoor",
    role: "Private Sector Employee",
  },
  {
    text: "I'm extremely happy with the results I've achieved at JBS Gym. The personal trainers are very professional and dedicated to helping you succeed. It's not just a gym; it's a community that pushes you to be your best.",
    name: "Rohan Deshmukh",
    role: "Bank Officer",
  },
  {
    text: "The personal training sessions at JBS Gym are excellent! The trainers really take the time to understand your fitness goals and help you work towards them with a solid plan. The environment is motivating, and the equipment is high quality.",
    name: "Sakshi Nair",
    role: "IT Professional",
  },
];

export default function Achievements() {
  return (
    <section className="achievements" id="testimonials">
      <div className="container">
        <h2 className="achievements__title">Gym Achievements</h2>

        <div className="achievements__stats">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-card__value">{s.value}</div>
              <div className="stat-card__label">{s.label}</div>
            </div>
          ))}
        </div>

        <h2 className="achievements__subtitle">What People are Saying</h2>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <p>{t.text}</p>
              <div className="testimonial-card__name">{t.name}</div>
              <div className="testimonial-card__role">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
