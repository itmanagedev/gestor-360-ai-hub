import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play } from "lucide-react";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VideoModal = ({ open, onOpenChange }: VideoModalProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-3xl p-0 overflow-hidden">
      <DialogHeader className="p-4 pb-0">
        <DialogTitle className="text-lg font-semibold text-foreground">
          Veja o Gestor360° em ação
        </DialogTitle>
      </DialogHeader>
      <div className="aspect-video bg-muted flex items-center justify-center m-4 mt-2 rounded-lg border">
        {/* Placeholder — substitua pelo embed do vídeo */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <Play size={32} className="text-primary ml-1" />
          </div>
          <p className="text-sm text-muted-foreground">
            Vídeo de demonstração em breve
          </p>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default VideoModal;
