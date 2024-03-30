
const BasicInfo = ({ basics }) => {
  return (
    <div className="text-gray-700 body-font">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{basics.name}</h1>
          <p className="mb-8 leading-relaxed">{basics.summary}</p>
          <div className="flex justify-center">
            <a href={`mailto:${basics.email}`} className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Contacto</a>
            <a href={basics.url} className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Sitio Web</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
