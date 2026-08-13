import "./LoginPage.css";

export default function LoginPage({ onBack }) {
  return (
    <main className="login-page">
      <div className="login-card">
        <div className="login-card__header">
          <span className="eyebrow">Welcome back</span>
          <h1>Sign in to JBS GYM</h1>
          <p>Access your member dashboard, classes, and training updates.</p>
        </div>

        <form className="login-form">
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            Password
            <input type="password" placeholder="Enter your password" />
          </label>

          <div className="login-form__meta">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#top">Forgot password?</a>
          </div>

          <button type="submit" className="btn btn-primary login-form__submit">
            Sign In
          </button>
        </form>

        <button type="button" className="btn btn-ghost login-card__back" onClick={onBack}>
          Back to Home
        </button>
      </div>
    </main>
  );
}
