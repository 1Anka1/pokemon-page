import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

export const BackButton = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <button
      onClick={handleBack}
      className="flex items-center bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mb-7 gap-3 text-lg"
    >
      <MdArrowBack size="2em" />
      Go back
    </button>
  );
};
