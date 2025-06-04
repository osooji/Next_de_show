
export default function Home() {
  const handleClick = () => {
    console.log("click")
  }
  return (
    <div className="bg-white h-screen flex justify-center">
      <div className="">
        <button onClick={handleClick}>SignUp</button>
      </div>
      <div className="">
        <button onClick={handleClick}>SignIn</button>
      </div>
    </div>
  );
}
