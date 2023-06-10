import logo from "/elegant-logo.svg";

const CompanyLogo = (isFooter) => {
  if (isFooter) {
    return (
      <div className="flex justify-start">
        <div className="flex h-4 lg:h-12 items-center justify-center gap-2">
          <img
            className="h-full"
            src={logo}
            alt="Elegant Edge Fashion School"
          />
          <h2 className="flex flex-col lg:text-3xl font-bold">Elegant Edge</h2>
        </div>
      </div>
    );
  }
  else{
    return (
        <>
            <div className="flex h-4 lg:h-12 items-center justify-center gap-2">
              <img
                className="h-full"
                src={logo}
                alt="Elegant Edge Fashion School"
              />
              <h2 className="flex flex-col lg:text-3xl font-bold">Elegant Edge</h2>
            </div>
          </>
      )
  }
};

export default CompanyLogo;
