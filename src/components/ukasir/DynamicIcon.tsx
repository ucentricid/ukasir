import React from 'react';
import * as LucideIcons from 'lucide-react';

export const DynamicIcon = ({ name, className }: { name: string, className?: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <LucideIcons.HelpCircle className={className} />;
  return <Icon className={className} />;
};
