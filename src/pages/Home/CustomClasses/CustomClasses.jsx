const CustomClasses = () => {
  return (
    <div className="py-20 px-10 custom-class text-white">
      <div className="text-center space-y-3">
        <h3 className="text-4xl font-bold">Create Your Custom Class</h3>
        <p className="font-semibold lg:w-2/4 mx-auto">
          Tailored Fashion Education to Suit Your Style: Unlock Your Creativity
          and Unleash Your Unique Vision with Personalized Fashion Design
          Classes.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 lg:w-3/4 lg:mx-auto mt-10 bg-[#CDC7F8] bg-opacity-20 p-5 lg:p-10 rounded-md">
        <div className="space-y-3">
          <h3 className="text-2xl lg:text-4xl font-bold">
            Get your Custom Classes
          </h3>
          <p className="lg:w-3/4">
            Feel free to send your requirements and contact with us. We would
            love to discuss with you. We value your time and money. Lets make
            this experience more reliable.
          </p>
        </div>
        <div>
          <form className="space-y-3 border-2 border-white p-5 rounded-md">
            <div className="space-y-2">
              <label>Your Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="bg-white w-full p-2 rounded-md text-black"
              />
            </div>
            <div className="space-y-2">
              <label>Your Inquiry</label>

              <textarea
                className="textarea textarea-lg bg-white w-full p-2 rounded-md text-black"
                placeholder="Bio"
              ></textarea>
            </div>
            <input type="submit" value="Submit" className="bg-white p-2 text-center w-full rounded-md font-semibold text-black"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomClasses;
