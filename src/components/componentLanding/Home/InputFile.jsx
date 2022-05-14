import React, { useRef, useState } from "react";
import axios from "axios";

export default function InputFile() {
  const fullName = useRef(null);
  const phoneNumberRef = useRef(null);
  const descriptionRef = useRef(null);
  const [fileUploaded, setFileUploaded] = useState();
  const handleButtonImage = (e) => {
    if (e.target.files[0]) {
      setFileUploaded(e.target.files[0]);
    }
  };
  const sendFile = async () => {
    const payload = new FormData();
    payload.append("nama", fullName.current.value);
    payload.append("alamat", descriptionRef.current.value);
    payload.append("telp", phoneNumberRef.current.value);
    payload.append("fileUploaded", fileUploaded);
    try {
      const proggresSave = await axios.post(
        "http://localhost:5000/api/backend",
        payload
      );
      console.log(proggresSave);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div id="pesanan_id">
      <div
        className="w-full flex justify-center items-center font-cabin mt-10 lg:mt-20"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="flex flex-col justify-center w-1/2">
          <div className="flex justify-center items-center">
            <div className="px-4 sm:px-0">
              <h3 className="text-4xl font-medium leading-6 text-gray-900">
                Pesan Disini
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Masukkan File yang akan anda print di HoriPhoto
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nama Lengkap
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        +62
                      </span>
                      <input
                        type="text"
                        id="company-website"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="your name"
                        ref={fullName}
                      />
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      No WhatsApp
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        +62
                      </span>
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="xxx-xxx-xxx"
                        ref={phoneNumberRef}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md pl-2"
                      placeholder="Masukan Deskripsi anda di sini"
                      defaultValue={""}
                      ref={descriptionRef}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Brief description for your profile. URLs are hyperlinked.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Masukkan File anda di sini
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload File anda disini &</span>
                          <input
                            id="file-upload"
                            name="fileUploaded"
                            type="file"
                            onChange={handleButtonImage}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">
                          Rasakan Keakuratan dan kecapatan nya
                        </p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  onClick={sendFile}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
