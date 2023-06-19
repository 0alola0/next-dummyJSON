//ნამდვილი სკელეტონი არ არის:დ უბრალოდ ლოუდინგ სქრინია. ნამდვილი საიტი რომ იყოს ნამდვილი სკელეტონი იქნებოდა

const LoadingSkeleton = ({pageName}) => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "150px"}}>
        <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
        <span>{pageName} is loading</span>
    </div>
  );
}

export default LoadingSkeleton;
