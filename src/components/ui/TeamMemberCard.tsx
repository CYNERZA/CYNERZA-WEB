import React from 'react';
import { cn } from '@/lib/utils';

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  socialLinks?: {
    platform: string;
    url: string;
    icon: React.ReactNode;
  }[];
  className?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  imageUrl,
  bio,
  socialLinks = [],
  className
}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-lg min-w-[220px] max-w-[250px]", className)}>
  <img
    src={imageUrl}
    alt={name}
    className="w-32 h-32 object-cover object-center rounded-full border-4 border-white shadow-lg bg-gray-100 mb-3"
    style={{ aspectRatio: '1 / 1' }}
  />
  <h3 className="text-lg font-bold font-heading text-center mt-1 mb-0">{name}</h3>
  <p className="text-sm text-cynerza-purple text-center m-0 my-1">{role}</p>
  <p className="text-xs text-gray-600 text-center mt-1 mb-0 px-2">{bio}</p>
</div>
  );
};

export default TeamMemberCard;
