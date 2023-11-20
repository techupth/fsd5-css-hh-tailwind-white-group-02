import "./App.css";

const App = () => {
  return (
    <div>
      <section className="  w-fit p-8 rounded-xl mx-auto mt-20 bg-white ">
        <p>Login to Website</p>

        <form>
          <div className="boxes">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div className="boxes">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
        </form>
        <div className="button-div">
          <button className=" signIn-btn ">Sign in</button>
          <button className="signUp-btn">Sign Up</button>
        </div>
      </section>
    </div>
  );
};
export default App;
