const Navbar = () => {
  return (
    <div className="absolute w-full">
      <div className="pt-6 md:px-24 lg:px-36 xl:px-50 2xl:px-64 flex items-center justify-between text-sm lg:text-default font-bold text-tertiary">
        <div className="">
          <a href="/">kavania2002</a>
        </div>
        <div className="flex gap-x-8">
          <a href="/experience">Experience</a>
          <a href="/projects">Projects</a>
          <a href="/achievements">Achievements</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
