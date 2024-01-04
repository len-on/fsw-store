import React from "react";
import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client"
import { HeadphonesIcon, Keyboard, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from "lucide-react";
interface CategoryItemProps {
  category: Category
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const categoryItem = {
    keyboards: <Keyboard size={16}/>,
    monitors: <MonitorIcon size={16}/>,
    headphones: <HeadphonesIcon size={16}/>,
    mousepads: <SquareIcon size={16}/>,
    speakers: <SpeakerIcon size={16}/>,
    mouses: <MouseIcon size={16}/>
  }

  return (
    <Badge 
      variant={"outline"} 
      className="flex items-center justify-center gap-2 rounded-lg py-3"
    >
      {categoryItem[category.slug as keyof typeof categoryItem]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  );
}
 
export default CategoryItem;