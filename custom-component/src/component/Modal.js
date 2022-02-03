import React, { useState } from "react";

const Modal = ({ componentName }) => {
  const [modalState, setModalState] = useState(false);

  return (
    <section className="componentbg">
      <div>
        <h1 className="font-bold">{componentName}</h1>
      </div>
      <div className="flex justify-center mt-14">
        <button
          className="px-6 py-3 mr-1 mb-1 bg-purple-700 text-white outline-none focus:outline-none ease-linear shadow hover:shadow-lg transition-all duration-150 font-bold text-sm rounded-full"
          type="button"
          onClick={() => setModalState(true)}
        >
          Open Modal
        </button>
        {modalState ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-1/3 bg-white">
                <button
                  className="text-black font-bold px-6 py-2"
                  type="button"
                  onClick={() => setModalState(false)}
                >
                  X
                </button>
                <div className="flex justify-center p-5 rounded-t">
                  <h2 className="text-xl font-semibold text-purple-700">
                    Hello CodeStates!
                  </h2>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default Modal;
