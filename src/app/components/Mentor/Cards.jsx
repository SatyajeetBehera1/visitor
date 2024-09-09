import React from "react";
import Image from "next/image"

import PocketFm from "../../../assets/CompanyLogo/logos/pocketFm.png";
import Group from "../../../assets/CompanyLogo/logos/Group.png";
import Amazon from "../../../assets/CompanyLogo/logos/amazon.png";
import Teckion from "../../../assets/CompanyLogo/logos/teckion.png";
import DCS from "../../../assets/CompanyLogo/logos/DCS.png";
import JayeshKesari from "../../../assets/MentorsPhoto/JayeshKesari.png"
import AyushRaj from "../../../assets/MentorsPhoto/AyushRaj.png"
import AshutoshKumar from "../../../assets/MentorsPhoto/AshutoshKumar.png"
import YashwantKumar from "../../../assets/MentorsPhoto/YashwantKumar.png"
import Utkash from "../../../assets/MentorsPhoto/Utkash.png"


export default function Cards() {
  return (
    <div className="flex items-center justify-center mx-[5%] mt-[25%] md:mt-[5%] mb-5">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:w-[70%]">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 text-center">
            <Image
              className="w-28 h-28 rounded-full shadow-lg mx-auto mb-3"
              src={JayeshKesari}
              alt="Profile Image"
            />
            <h5 className="text-xl font-medium text-gray-900">Jayesh Kesari</h5>
            <p className="text-sm text-gray-500">Senior SDE</p>
            <div className="flex justify-center mt-[15%]">
              <Image
                className="w-auto h-14 md:w-auto md:h-[10%]"
                src={PocketFm}
                alt="PocketFm logo"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 text-center">
            <Image
              className="w-28 h-28 rounded-full shadow-lg mx-auto mb-3"
              src={AyushRaj}
              alt="Profile Image"
            />
            <h5 className="text-xl font-medium text-gray-900">Ayush Raj</h5>
            <p className="text-sm text-gray-500">SDE</p>
            <div className="flex justify-center mt-[15%]">
              <Image
               className="w-auto h-10 md:w-auto md:h-[10%]"
                src={Group}
                alt="Group logo"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 text-center">
            <Image
              className="w-28 h-28 rounded-full shadow-lg mx-auto mb-3"
              src={AshutoshKumar}
              alt="Profile Image"
            />
            <h5 className="text-xl font-medium text-gray-900">Ashutosh Kumar</h5>
            <p className="text-sm text-gray-500">Senior SDE</p>
            <div className="flex justify-center mt-[15%]">
              <Image
                className="w-auto h-10 md:w-auto md:h-[10%]"
                src={Amazon}
                alt="Amazon logo"
              />
            </div>
          </div>
        </div>
        

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 text-center">
            <Image
              className="w-28 h-28 rounded-full shadow-lg mx-auto mb-3"
              src={YashwantKumar}
              alt="Profile Image"
            />
            <h5 className="text-xl font-medium text-gray-900">Yeshwant Kumar</h5>
            <p className="text-sm text-gray-500">Backend Lead Engineer</p>
            <div className="flex justify-center mt-[15%]">
              <Image
                className="w-auto h-5 md:w-auto md:h-[10%]"
                src={Teckion}
                alt="Teckion logo"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 text-center">
            <Image
              className="w-28 h-28 rounded-full shadow-lg mx-auto mb-3"
              src={Utkash}
              alt="Profile Image"
            />
            <h5 className="text-xl font-medium text-gray-900">Utkash</h5>
            <p className="text-sm text-gray-500">Data & Analytics Lead</p>
            <div className="flex justify-center mt-[15%]">
              <Image
                className="w-auto h-14 md:w-auto md:h-[10%]"
                src={DCS}
                alt="DCS logo"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}
