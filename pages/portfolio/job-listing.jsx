import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import Tag from "../../components/Tag";
import JobCard from "../../components/JobCard";

export default function JobListing() {
  const [isJunior, setIsJunior] = useState(false);
  const [isSenior, setIsSenior] = useState(false);

  const [isFrontEnd, setIsFrontEnd] = useState(false);
  const [isBackEnd, setIsBackEnd] = useState(false);

  const [isReact, setIsReact] = useState(false);

  return (
    <>
      <div className="bg-job w-full py-12 bg-LightCyan"></div>
      
      <div className="bg-white rounded drop-shadow-xl hidden md:flex p-5 -translate-y-1/2 mx-20 lg:mx-28 justify-between">
        <div className="flex-row flex space-x-4">
          {isJunior ? (
            <Tag name="Junior" isTag={isJunior} setIsTag={setIsJunior} />
          ) : (
            <></>
          )}
          {isSenior ? (
            <Tag name="Senior" isTag={isSenior} setIsTag={setIsSenior} />
          ) : (
            <></>
          )}

          {isFrontEnd ? (
            <Tag name="FrontEnd" isTag={isFrontEnd} setIsTag={setIsFrontEnd} />
          ) : (
            <></>
          )}
          {isBackEnd ? (
            <Tag name="BackEnd" isTag={isBackEnd} setIsTag={setIsBackEnd} />
          ) : (
            <></>
          )}

          {isReact ? (
            <Tag name="React" isTag={isReact} setIsTag={setIsReact} />
          ) : (
            <></>
          )}
        </div>
        <div className="w-56 text-right relative">
          <Menu as="div" className="inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-cyan-700 bg-LightCyan rounded-md duration-200 hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Filter by
                <ChevronDownIcon
                  className="w-5 h-5 ml-2 -mr-1 text-cyan-700"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          setIsJunior(!isJunior);
                        }}
                        className={`${
                          active
                            ? "bg-LightCyan text-cyan-700"
                            : "text-cyan-700"
                        } group
                                    flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Junior
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          setIsSenior(!isSenior);
                        }}
                        className={`${
                          active
                            ? "bg-LightCyan text-cyan-700"
                            : "text-cyan-700"
                        } group
                                    flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Senior
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          setIsFrontEnd(!isFrontEnd);
                        }}
                        className={`${
                          active
                            ? "bg-LightCyan text-cyan-700"
                            : "text-cyan-700"
                        } group
                                    flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        FrontEnd
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          setIsBackEnd(!isBackEnd);
                        }}
                        className={`${
                          active
                            ? "bg-LightCyan text-cyan-700"
                            : "text-cyan-700"
                        } group
                                    flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        BackEnd
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          setIsReact(!isReact);
                        }}
                        className={`${
                          active
                            ? "bg-LightCyan text-cyan-700"
                            : "text-cyan-700"
                        } group
                                    flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        React
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div className="space-y-5 pt-10 pb-10 md:pt-0">
        <JobCard
          src="/../media/job-comp/0.svg"
          title="Junior FrontEnd Developer"
          isNew={true}
          isFeatured={true}
          business="Insure"
          date="1d ago"
          time="Full Time"
          location="USA only"
          junior={true}
          frontEnd={true}
          isJunior={isJunior}
          isSenior={isSenior}
          isFrontEnd={isFrontEnd}
          isBackEnd={isBackEnd}
          isReact={isReact}
        />

        <JobCard
          src="/../media/job-comp/1.svg"
          title="Front-end Dev"
          business="The Air Filter Company"
          isNew={true}
          date="2d ago"
          time="Part Time"
          location="Worldwide"
          senior={true}
          frontEnd={true}
          react={true}
          isJunior={isJunior}
          isSenior={isSenior}
          isFrontEnd={isFrontEnd}
          isBackEnd={isBackEnd}
          isReact={isReact}
        />

        <JobCard
          src="/../media/job-comp/2.svg"
          title="React FrontEnd Expert"
          business="Account"
          date="5d ago"
          time="Full Time"
          location="Spain"
          senior={true}
          frontEnd={true}
          backEnd={true}
          react={true}
          isJunior={isJunior}
          isSenior={isSenior}
          isFrontEnd={isFrontEnd}
          isBackEnd={isBackEnd}
          isReact={isReact}
        />

        <JobCard
          src="/../media/job-comp/3.svg"
          title="Backend Junior Developer"
          business="EyeCam"
          date="6d ago"
          time="Part Time"
          location="Paris"
          junior={true}
          backEnd={true}
          isJunior={isJunior}
          isSenior={isSenior}
          isFrontEnd={isFrontEnd}
          isBackEnd={isBackEnd}
          isReact={isReact}
        />

        <JobCard
          src="/../media/job-comp/4.svg"
          title="Sofware Engineer"
          business="FaceIt"
          date="1w ago"
          time="Full Time"
          location="Worldwide"
          senior={true}
          frontEnd={true}
          backEnd={true}
          react={true}
          isJunior={isJunior}
          isSenior={isSenior}
          isFrontEnd={isFrontEnd}
          isBackEnd={isBackEnd}
          isReact={isReact}
        />

        <JobCard
          src="/../media/job-comp/5.svg"
          title="Fullstrack Developer"
          business="Loop Studios"
          date="1w ago"
          time="Full Time"
          location="Remote"
          junior={true}
          senior={true}
          frontEnd={true}
          backEnd={true}
          react={true}
          isJunior={isJunior}
          isSenior={isSenior}
          isFrontEnd={isFrontEnd}
          isBackEnd={isBackEnd}
          isReact={isReact}
        />

        <JobCard
          src="/../media/job-comp/6.svg"
          title="Junior FrontEnd Developer"
          business="Manage"
          date="1w ago"
          time="Full Time"
          location="USA only"
          junior={true}
          frontEnd={true}
          react={true}
          isJunior={isJunior}
          isSenior={isSenior}
          isFrontEnd={isFrontEnd}
          isBackEnd={isBackEnd}
          isReact={isReact}
        />

        <JobCard
          src="/../media/job-comp/7.svg"
          title="Full Stack Engineer"
          business="MyHome"
          date="2w ago"
          time="Full Time"
          location="Russia"
          frontEnd={true}
          backEnd={true}
          isJunior={isJunior}
          isSenior={isSenior}
          isFrontEnd={isFrontEnd}
          isBackEnd={isBackEnd}
          isReact={isReact}
        />

        <JobCard
          src="/../media/job-comp/8.svg"
          title="Senior FrontEnd Developer"
          business="Photosnap"
          date="3w ago"
          time="Part Time"
          location="London"
          senior={true}
          frontEnd={true}
          react={true}
          isJunior={isJunior}
          isSenior={isSenior}
          isFrontEnd={isFrontEnd}
          isBackEnd={isBackEnd}
          isReact={isReact}
        />

        <JobCard
          src="/../media/job-comp/9.svg"
          title="Junior React FrontEnd"
          business="Shortly"
          date="1mo ago"
          time="Part Time"
          location="Ukraine"
          junior={true}
          frontEnd={true}
          react={true}
          isJunior={isJunior}
          isSenior={isSenior}
          isFrontEnd={isFrontEnd}
          isBackEnd={isBackEnd}
          isReact={isReact}
        />
      </div>
    </>
  );
}
