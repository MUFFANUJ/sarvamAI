import React from "react";
import BackButton from "./subComponents/BackButton";
import MenuItem from "./MenuItem";
import { User, Share, Shield, FileText,History } from 'lucide-react';
import { SiDiscord } from "react-icons/si";
import { RiVoiceprintFill } from "react-icons/ri";
import { FaRegSmile } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

export default function ProfileSidebar() {
  const menuItems = [
    {
      icon: <User className="h-6 w-6" />,
      text: 'Account',
      to: '/profile/account'
    },
    {
      icon: <History className="h-6 w-6" />,
      text: 'Manage history',
      to: '/profile/manage-history'
    },
    {
      icon: <RiVoiceprintFill className="h-6 w-6" />,
      text: 'Voice settings',
      to: '/profile/settings'
    },
    {
      icon: <FaRegSmile className="h-6 w-6" />,
      text: 'Give feedback',
      to: 'https://docs.google.com/forms/d/e/1FAIpQLSdE5cc5jPIbdOgFufH-tCio4fMMRUiiFIGJ_RoH0FSrqhFw-A/viewform?usp=header',
      external: true
    },
    {
      icon: <IoIosShareAlt className="h-6 w-6" />,
      text: 'Share Pi with others',
      to: '/profile/referral'
    },
    {
      icon: <SiDiscord className="h-6 w-6" />,
      text: 'Join our Discord community',
      to: 'https://discord.com/invite/VavJn8Ff5Y',
      external: true
    },
    {
      icon: <Shield className="h-6 w-6" />,
      text: 'Privacy policy',
      to: 'https://pi.ai/policy#privacy'
    },
    {
      icon: <FileText className="h-6 w-6" />,
      text: 'Terms of service',
      to: 'https://pi.ai/policy#terms'
    }
  ];
  return (
    <div className="bg-primary-100 pt-8 h-screen overflow-y-scroll scrollbar-hide p-5">
      <div className="flex items-center mt-2 rounded-t-card md:mt-0 md:rounded-none lg:px-6">
        <BackButton />
        <div className="grow text-primary-700">
          <h1 className="text-h-l-mobile hidden lg:block text-2xl font-semibold">
            Profile
          </h1>
        </div>
      </div>

      <div className="flex flex-col space-y-1 overflow-y-auto  pb-6">
        <h1 className="pb-8 pl-2  text-h-l-mobile lg:hidden text-center text-2xl font-semibold">
          Profile
        </h1>
        
        {menuItems.slice(0,5).map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}

      <div className="h-5" />
      <div className="h-[1px] bg-primary-200 mx-2" />
      <div className="h-6" />

        <MenuItem {...menuItems[5]} />

        <div className="h-5" />
        <div className="h-[1px] bg-primary-200 mx-2" />
        <div className="h-6" />

        {menuItems.slice(6).map((item, index) => (
          <MenuItem key={`legal-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}
