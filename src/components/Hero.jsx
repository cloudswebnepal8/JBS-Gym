import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <h1 className="hero__title">
          your Fitness Success With
          <br />
          <span className="hero__brand">JBS GYM</span>
          <br />
          <span className="hero__tagline">Train, Transform, Thrive</span>
        </h1>

        <p className="hero__subtitle">
          JBS gym is your ultimate fitness destination. Achieve your fitness
          goals with personalized training plans, state-of-the-art equipment,
          and expert trainers. Join us and start your transformation today!
        </p>

        <div className="hero__actions">
          <a
            className="btn btn-outline"
            href="https://api.whatsapp.com/send/?phone=918150933624&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            Book a Free Class
          </a>
          <a
            className="btn btn-outline hero__cta-mid"
            href="https://drive.google.com/file/d/1lTcusRZmBYzCUQncR199F3XXzEM0_W5P/view"
            target="_blank"
            rel="noreferrer"
          >
            Explore Memberships
          </a>
          <a
            className="btn btn-primary"
            href="https://t.me/franchisehub369"
            target="_blank"
            rel="noreferrer"
          >
            Join Our Community
          </a>
        </div>

        <div className="hero__media">
          <div className="hero__media-card">
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&q=80"
              alt="Runner tying shoelaces on a grass field"
            />
          </div>
          <div className="hero__media-card">
            <img
              src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=900&q=80"
              alt="Man training with a barbell landmine setup in a gym"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
