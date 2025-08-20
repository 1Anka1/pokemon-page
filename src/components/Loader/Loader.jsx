import PuffLoader from 'react-spinners/PuffLoader';

export default function Loader({ isLoading, children }) {
  return isLoading ? (
    <div className="flex justify-center m-20">
      <PuffLoader size={50} color="red" />
    </div>
  ) : (
    children
  );
}
