import { useState } from 'react';
import './Login.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Login({ onLoginSuccess }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateField = (name, value) => {
    if (name === 'email') {
      if (!value.trim()) return 'Email is required';
      if (!EMAIL_PATTERN.test(value)) return 'Enter a valid email address';
    }
    if (name === 'password') {
      if (!value) return 'Password is required';
      if (value.length < 6) return 'Password must be at least 6 characters';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      email: validateField('email', formData.email),
      password: validateField('password', formData.password),
    };
    setErrors(newErrors);
    setTouched({ email: true, password: true });

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) return;

    setIsSubmitting(true);
    // Simulate an auth request — replace with a real API call.
    setTimeout(() => {
      setIsSubmitting(false);
      onLoginSuccess?.();
    }, 700);
  };

  return (
    <div className="login-page">
      <div className="login-page__brand-panel">
        <div className="login-page__brand-content">
          <div className="login-page__logo">
            <span className="login-page__logo-mark">Z</span>
            <span className="login-page__logo-text">Zolemate</span>
          </div>
          <h1 className="login-page__headline">
            Where real connections start with a Zole.
          </h1>
          <p className="login-page__subhead">
            Share moments, meet new people, and grow your circle — all in one
            place built for genuine conversations.
          </p>

          <ul className="login-page__stat-list" aria-label="Community highlights">
            <li>
              <span className="login-page__stat-number">2.4M+</span>
              <span className="login-page__stat-label">Active members</span>
            </li>
            <li>
              <span className="login-page__stat-number">180k</span>
              <span className="login-page__stat-label">Daily matches</span>
            </li>
            <li>
              <span className="login-page__stat-number">4.8★</span>
              <span className="login-page__stat-label">App rating</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="login-page__form-panel">
        <div className="login-card">
          <div className="login-card__mobile-logo">
            <span className="login-page__logo-mark">Z</span>
            <span className="login-page__logo-text">Zolemate</span>
          </div>

          <h2 className="login-card__title">Welcome back</h2>
          <p className="login-card__subtitle">
            Log in to keep up with your matches and messages.
          </p>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="email" className="form-field__label">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className={`form-field__input ${errors.email && touched.email ? 'form-field__input--error' : ''}`}
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.email && touched.email)}
                aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
              />
              {errors.email && touched.email && (
                <span className="form-field__error" id="email-error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="password" className="form-field__label">
                Password
              </label>
              <div className="form-field__password-wrap">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className={`form-field__input ${errors.password && touched.password ? 'form-field__input--error' : ''}`}
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.password && touched.password)}
                  aria-describedby={errors.password && touched.password ? 'password-error' : undefined}
                />
                <button
                  type="button"
                  className="form-field__toggle-visibility"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.password && touched.password && (
                <span className="form-field__error" id="password-error" role="alert">
                  {errors.password}
                </span>
              )}
            </div>

            <div className="login-form__row">
              <label className="login-form__remember">
                <input type="checkbox" name="remember" />
                <span>Remember me</span>
              </label>
              <a href="#forgot-password" className="login-form__link">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="login-form__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in…' : 'Log in'}
            </button>
          </form>

          <p className="login-card__signup">
            New to Zolemate?{' '}
            <a href="#sign-up" className="login-form__link">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
