import { useNavigate } from 'react-router-dom';

const Kenny = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Back button */}
      <div className="absolute top-6 left-6">
        <button
          onClick={handleBackClick}
          className="flex items-center text-gray-600 hover:text-black transition-colors duration-200"
        >
          <svg 
            className="w-5 h-5 mr-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">back</span>
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-black mb-12 text-center">
          You found Kenny!
        </h1>
        
        <div className="flex justify-center">
          <img 
            src="/images/ba8eea36-a176-41f6-af05-a35d97496170.png" 
            alt="Kenny celebration" 
            className="max-w-md w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Kenny;
