import { Download, MoreHorizontal, Send, Share2, Star } from "lucide-react";
import React from "react";
import Button from "../shared/Button";


const CardActions: React.FC = () => {
  return (
    <div className="flex flex-col items-center mb-4">
      {/* Primary Actions */}
      <div className="flex flex-row justify-center gap-6 mb-4">
      
      <Button size="small" variant="default" className="flex items-center transition-transform transform hover:scale-105" onClick={(e) => e.stopPropagation()}>
          <Star className="mr-1 h-4 w-4" />
          Favorite
        </Button>
        <Button size="small" variant="default" className="flex items-center transition-transform transform hover:scale-105" onClick={(e) => e.stopPropagation()}>
          <Send className="mr-1 h-4 w-4" />
          Send
        </Button>
      </div>
      {/* Secondary Actions */}
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <Button size="small" variant="outline" className="flex items-center transition-transform transform hover:scale-105" onClick={(e) => e.stopPropagation()}>
          <Share2 className="mr-1 h-4 w-4" />
          Share
        </Button>
        <Button size="small" variant="outline" className="flex items-center transition-transform transform hover:scale-105" onClick={(e) => e.stopPropagation()}>
          <Download className="mr-1 h-4 w-4" />
          Download
        </Button>
        <Button size="small" variant="outline" className="flex items-center transition-transform transform hover:scale-105" onClick={(e) => e.stopPropagation()}>
          <MoreHorizontal className="mr-1 h-4 w-4" />
          More
        </Button>
      </div>
    </div>
  );
};

export default CardActions;
