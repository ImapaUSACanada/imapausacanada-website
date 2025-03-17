import { useState, useEffect } from 'react';
import styles from './AuthPage.module.css';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 640);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.authBox}>
                <div
                    className={
                        isMobile
                            ? ''
                            : `${styles.slider} ${
                                  isLogin ? styles.slideRight : styles.slideLeft
                              }`
                    }
                >
                    {/* Login Form */}
                    <form
                        className={`${styles.form} ${
                            isMobile && isLogin ? styles.active : ''
                        }`}
                    >
                        <h2>Welcome Back</h2>
                        <input
                            type='email'
                            name='email'
                            placeholder='Email Address'
                            required
                        />
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            required
                        />

                        <div className={styles.options}>
                            <div className={styles.rememberCheckbox}>
                                <input
                                    type='checkbox'
                                    id='remember'
                                    name='remember'
                                />
                                <label htmlFor='remember'>Remember me</label>
                            </div>
                            <a href='#'>Forgot password?</a>
                        </div>

                        <button type='submit' className={styles.btn}>
                            Sign In
                        </button>
                        <p>
                            New to IMAPA?{' '}
                            <button
                                type='button'
                                onClick={() => setIsLogin(false)}
                                className={styles.toggleBtn}
                            >
                                Create Account
                            </button>
                        </p>
                    </form>

                    {/* Register Form */}
                    <form
                        className={`${styles.form} ${
                            isMobile && !isLogin ? styles.active : ''
                        }`}
                    >
                        <h2>Create Account</h2>
                        <input
                            type='text'
                            name='fullname'
                            placeholder='Full Name'
                            required
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Email Address'
                            required
                        />
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            required
                        />
                        <button type='submit' className={styles.btn}>
                            Create Account
                        </button>
                        <p>
                            Already have an account?{' '}
                            <button
                                type='button'
                                onClick={() => setIsLogin(true)}
                                className={styles.toggleBtn}
                            >
                                Sign In
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
