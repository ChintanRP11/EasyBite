const Contact = () => {
  return (
    <div className="contact-us w-full h-auto m-auto text-center flex flex-col items-center ">
      <h1 className="font-bold text-4xl m-1 p-2">Contact Us</h1>
      <form className="text-center flex flex-col w-6/12 items-center mt-2 p-4">
        <input
          type="text"
          placeholder="Name"
          className="w-1/2 border-[1px] border-black rounded-sm p-1"></input>
        <br />
        <input
          type="email"
          placeholder="Email"
          className="w-1/2 border-[1px] border-black rounded-sm p-1"></input>
        <br />
        <textarea
          rows={5}
          cols={30}
          placeholder="Message"
          className="w-1/2 border-[1px] border-black rounded-sm p-1"></textarea>
        <button className="w-auto m-2 p-2  bg-blue-700 hover:bg-blue-800 rounded-lg text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
