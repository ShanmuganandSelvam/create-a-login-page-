import { useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser } from 'react-icons/fi';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-card overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {isLogin ? 'Welcome back!' : 'Create an account'}
              </h1>
              <p className="text-gray-600">
                {isLogin ? 'Sign in to access your account' : 'Sign up to get started'}
              </p>
            </div>

            {isLogin ? <LoginForm /> : <SignupForm />}

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button 
                  onClick={() => setIsLogin(!isLogin)} 
                  className="ml-1 text-primary-600 hover:text-primary-700 font-medium"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
            <p className="text-center text-sm text-gray-500">
              By continuing, you agree to our 
              <a href="#" className="text-primary-600 hover:text-primary-700"> Terms of Service </a> 
              and 
              <a href="#" className="text-primary-600 hover:text-primary-700"> Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;