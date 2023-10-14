import Image from 'next/image'
import React from 'react'
import threadxImg from '../public/assets/projects/thread-x.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const ThreadX = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={threadxImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Thread-X</h2>
          <h3>Next.js / Typescript / Clerk</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using Next.js, Typescript, Clerk, TailwindCSS. It
            is a social media app that allows users to post interesting events
            that happened in their lives. Users can like and comment on each
            other&apos;s posts. The app also has a search feature that allows
            users to search for posts by title. The app also has a feature that
            allows users to upload images to their posts. It uses the Clerk
            authentication service to handle user authentication and
            authorization along with its own Webhook. It also uses TailwindCSS
            for styling. It also has a feature of creating communities and
            joining communities. Users can also create posts in communities and
            comment on posts in communities.
          </p>
          <a
            href="https://github.com/Crazyhaller/thead-x"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://thead-x.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Live Project</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Clerk
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TailwindCSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  )
}

export default ThreadX
