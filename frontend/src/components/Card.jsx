const Card = ({ title, description }) => {
  return (
    <div className="w-[400px] bg-gray-100 border border-gray-300 rounded-lg shadow-md overflow-hidden mx-auto">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 border-b border-gray-300 pb-2">
          {title}
        </h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
