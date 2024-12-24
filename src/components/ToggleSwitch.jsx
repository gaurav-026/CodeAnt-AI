import React, { useState } from 'react'
import github from '@/assets/github.png';
import bitbucket from '@/assets/bitbucket.png';
import azure from '@/assets/azure.svg';
import gitlab from '@/assets/gitlab.svg';
import sso from '@/assets/sso.png';
import Image from 'next/image';


const ToggleSwitch = () => {
  const [activeTab, setActiveTab] = useState("SAAS");
  return (
    <div className="p-6 max-w-md mx-auto">
      {/* Toggle Switch */}
      <div className="flex">
        <button
          className={`flex-1 py-2text-center text-lg font-medium ${activeTab === "SAAS" ? "text-white bg-blue border rounded-md" : "text-black bg-bgColor border rounded-md"
            }`}
          onClick={() => setActiveTab("SAAS")}
        >
          SAAS
        </button>
        <button
          className={`flex-1 py-2 text-center text-lg font-medium ${activeTab === "Self Hosted"
              ? "text-white bg-blue border rounded-md" : "text-black bg-bgColor border rounded-md"
            }`}
          onClick={() => setActiveTab("Self Hosted")}
        >
          Self Hosted
        </button>
      </div>

      {/* Content */}
      <div className="mt-6">
        {activeTab === "SAAS" && (
          <div className="flex flex-col gap-4">
            <a className="flex gap-4 items-center justify-center w-full bg-white hover:bg-gray text-md py-2 px-6 md:px-16 lg:px-16 rounded-md border" href='/repositoryPage'>
              <Image src={github} alt='github'></Image> Sign in with GitHub
            </a>
            <a className="flex gap-4 items-center justify-center w-full bg-white hover:bg-gray text-md py-2 px-6 md:px-16 lg:px-16 rounded-md border" href='/repositoryPage'>
              <Image src={bitbucket} alt='github'></Image> Sign in with BitBucket
            </a>
            <a className="flex gap-4 items-center justify-center w-full bg-white hover:bg-gray text-md py-2 px-6 md:px-16 lg:px-16 rounded-md border" href='/repositoryPage'>
              <Image src={azure} alt='github'></Image> Sign in with Azure DevOps
            </a>
            <a className="flex gap-4 items-center justify-center w-full bg-white hover:bg-gray text-md py-2 px-6 md:px-16 lg:px-16  rounded-md border" href='/repositoryPage'>
              <Image src={gitlab} alt='github'></Image> Sign in with Gitlab
            </a>

          </div>
        )}
        {activeTab === "Self Hosted" && (
          <div className="flex flex-col gap-4">
            <a className="flex gap-4 items-center justify-center w-full bg-white hover:bg-gray text-md py-2 px-10 md:px-16 lg:px-16 rounded-md border" href='/repositoryPage'>
              <Image src={gitlab} alt='github'></Image> Self Hosted Git Lab
            </a>
            <a className="flex gap-4 items-center justify-center w-full bg-white hover:bg-gray text-md py-2 px-10 md:px-16 lg:px-16 rounded-md border" href='/repositoryPage'>
              <Image src={sso} alt='github'></Image> Sign in with SSO
            </a>

          </div>
        )}
      </div>
    </div>
  );
}

export default ToggleSwitch
