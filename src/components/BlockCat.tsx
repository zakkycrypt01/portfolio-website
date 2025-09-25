import { cn } from '@/lib/utils';


export default function BlockCat({ className }: { className?: string }) {
  return (
    <div className="flex items-center gap-2 font-headline text-xl font-bold">
      <img 
        src="/profile.png" 
        alt="BlockCat Profile" 
        className={cn("h-7 w-7 rounded-full", className)}
      />
      <span>zakkycrypt</span>
    </div>
  );
}
