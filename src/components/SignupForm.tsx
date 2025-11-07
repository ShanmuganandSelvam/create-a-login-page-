import { useState } from 'react';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import InputField from './InputField';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (!agreeToTerms) {
      setError('Please agree to the terms and conditions');
      return;
    }
    
    // Simulate signup process
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Account created successfully!');
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm animate-fadeIn">
          {error}
        </div>
      )}
      
      <InputField
        type="text"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        icon={<FiUser className="text-gray-400" />}
      />
      
      <InputField
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={<FiMail className="text-gray-400" />}
      />

      <InputField
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={<FiLock className="text-gray-400" />}
        rightIcon={
          <button 
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="focus:outline-none"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <FiEyeOff className="text-gray-400" />
            ) : (
              <FiEye className="text-gray-400" />
            )}
          </button>
        }
      />
      
      <InputField
        type={showConfirmPassword ? 'text' : 'password'}
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        icon={<FiLock className="text-gray-400" />}
        rightIcon={
          <button 
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="focus:outline-none"
            aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
          >
            {showConfirmPassword ? (
              <FiEyeOff className="text-gray-400" />
            ) : (
              <FiEye className="text-gray-400" />
            )}
          </button>
        }
      />

      <div className="flex items-start">
        <input
          id="terms"
          type="checkbox"
          className="h-4 w-4 mt-1 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
          checked={agreeToTerms}
          onChange={() => setAgreeToTerms(!agreeToTerms)}
        />
        <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
          I agree to the <a href="#" className="text-primary-600 hover:text-primary-700">Terms of Service</a> and <a href="#" className="text-primary-600 hover:text-primary-700">Privacy Policy</a>
        </label>
      </div>

      <button
        type="submit"
        className={`btn btn-primary w-full flex items-center justify-center ${
          isLoading ? 'opacity-80 cursor-not-allowed' : ''
        }`}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Creating account...
          </>
        ) : (
          'Create account'
        )}
      </button>

      <div className="relative flex items-center my-6">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="flex-shrink mx-4 text-gray-400 text-sm">or sign up with</span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          className="btn btn-secondary flex items-center justify-center"
        >
          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Google
        </button>
        <button
          type="button"
          className="btn btn-secondary flex items-center justify-center"
        >
          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="#1877F2">
            <path
              d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            />
          </svg>
          Facebook
        </button>
      </div>
    </form>
  );
};

export default SignupForm;