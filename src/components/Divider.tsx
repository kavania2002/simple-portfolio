const Divider = ({ className }: { className?: string }) => {
  return (
    <div className={`md:px-24 lg:px-36 xl:px-50 2xl:px-64 ${className}`}>
      <div className="border-b-3 border-secondary"></div>
    </div>
  );
};

export default Divider;
