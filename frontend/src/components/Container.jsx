import React from "react";

function Container() {
  return (
    <>
      <div className="ml-6 mr-6 mt-6 shadow rounded-md space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 gap-6">
        <div className="col-span-1 text-center">
          <img
            className="rounded-md w-auto shadow sm:w-full md:w-full lg:w-full xl:w-full"
            src="images/blog.webp"
            alt="blog-post"
          />
        </div>
        <div className="col-span-1 text-center">
          <div className="flex flex-col space-y-2">
            <h1 className="ml-2 md:text-4xl text-2xl font-bold text-center md:text-start mr-1">
              This is the header This is the header This is the header This is
              the header This is the header
            </h1>
            <div className="flex gap-2 items-center">
              <h2 className="ml-2 font-semibold text-sm">Writer Name</h2>
              <p className="text-gray-400">
                {new Date().toLocaleString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <div>
              <p className="text-start align-justify ml-2 mb-4 text-wrap text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-6 mr-6 mt-6 shadow rounded-md space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 gap-6">
        <div className="col-span-1 text-center">
          <img
            className="rounded-md w-auto shadow sm:w-full md:w-full lg:w-full xl:w-full"
            src="images/blog.webp"
            alt="blog-post"
          />
        </div>
        <div className="col-span-1 text-center">
          <div className="flex flex-col space-y-2">
            <h1 className="ml-2 md:text-4xl text-2xl font-bold text-center md:text-start mr-1">
              This is the header This is the header This is the header This is
              the header This is the header
            </h1>
            <div className="flex gap-2 items-center">
              <h2 className="ml-2 font-semibold text-sm">Writer Name</h2>
              <p className="text-gray-400">
                {new Date().toLocaleString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <div>
              <p className="text-start align-justify ml-2 mb-4 text-wrap text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-6 mr-6 mt-6 shadow rounded-md space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 gap-6">
        <div className="col-span-1 text-center">
          <img
            className="rounded-md w-auto shadow sm:w-full md:w-full lg:w-full xl:w-full"
            src="images/blog.webp"
            alt="blog-post"
          />
        </div>
        <div className="col-span-1 text-center">
          <div className="flex flex-col space-y-2">
            <h1 className="ml-2 md:text-4xl text-2xl font-bold text-center md:text-start mr-1">
              This is the header This is the header This is the header This is
              the header This is the header
            </h1>
            <div className="flex gap-2 items-center">
              <h2 className="ml-2 font-semibold text-sm">Writer Name</h2>
              <p className="text-gray-400">
                {new Date().toLocaleString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <div>
              <p className="text-start align-justify ml-2 mb-4 text-wrap ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container;
