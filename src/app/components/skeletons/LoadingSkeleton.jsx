//ნამდვილი სკელეტონი არ არის:დ უბრალოდ ლოუდინგ სქრინია. ნამდვილი საიტი რომ იყოს ნამდვილი სკელეტონი იქნებოდა

const LoadingSkeleton = ({pageName}) => {
  return (
    <div>
        <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
        <span>{pageName} is loading</span>
    </div>
  );
}

export default LoadingSkeleton;
