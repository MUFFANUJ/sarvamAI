import React from "react";
import BackButton from "./BackButton";
import MenuItem from "./MenuItem";
import { User, Settings, Share, MessageCircle, Shield, FileText,History } from 'lucide-react';
import { SiDiscord } from "react-icons/si";

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
      icon: <Settings className="h-6 w-6" />,
      text: 'Voice settings',
      to: '/profile/settings'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      text: 'Give feedback',
      to: 'https://form.typeform.com/to/AzrorQcf',
      external: true
    },
    {
      icon: <Share className="h-6 w-6" />,
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
    <div className="w-full mx-auto md:mx-0 max-w-md p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex items-center py-5 mt-2 rounded-t-card md:mt-0 md:rounded-none px-4 lg:px-6">
        <BackButton />
        <div className="grow text-primary-700">
          <h1 className="font-condensed text-h-l-mobile hidden lg:block text-2xl">
            Profile
          </h1>
        </div>
      </div>

      <div className="flex flex-col space-y-1 overflow-y-auto  pb-6">
        <h1 className="pb-8 pl-2 font-condensed text-h-l-mobile lg:hidden text-center">
          Profile
        </h1>
        
        {menuItems.slice(0,5).map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}

      <div className="h-5" />
      <div className="h-[1px] bg-neutral-400 mx-2" />
      <div className="h-6" />

        <MenuItem {...menuItems[5]} />

        <div className="h-5" />
        <div className="h-[1px] bg-neutral-400 mx-2" />
        <div className="h-6" />

        {menuItems.slice(6).map((item, index) => (
          <MenuItem key={`legal-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}
