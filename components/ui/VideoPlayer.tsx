"use client";
import { useState } from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  videoUrl?: string;
  posterUrl?: string;
}

function getEmbedUrl(url: string): string | null {
  if (!url || url === "#") return null;
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
  return null;
}

function isDirectVideo(url: string): boolean {
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url);
}

export default function VideoPlayer({ videoUrl, posterUrl }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  const embedUrl = videoUrl ? getEmbedUrl(videoUrl) : null;
  const isDirect = videoUrl ? isDirectVideo(videoUrl) : false;
  const hasVideo = embedUrl || isDirect;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-surface group">
      {playing && hasVideo ? (
        isDirect ? (
          <video
            src={videoUrl}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            controls
            poster={posterUrl}
          />
        ) : (
          <iframe
            src={embedUrl!}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Project Demo Video"
          />
        )
      ) : (
        <>
          {/* Poster image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url('${posterUrl}')` }}
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              title="Play demo video"
              onClick={() => hasVideo && setPlaying(true)}
              className={`size-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center transition-colors group ${hasVideo ? "hover:bg-primary cursor-pointer" : "cursor-not-allowed opacity-60"}`}
            >
              <Play className="text-white text-4xl ml-1" />
            </button>
          </div>
          {!hasVideo && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 text-[9px] font-bold uppercase tracking-widest text-white/40">
              Demo coming soon
            </div>
          )}
        </>
      )}

      {/* Status badge */}
      {!playing && (
        <div className="absolute bottom-0 md:bottom-6 left-6 flex gap-3">
          <div className="px-4 py-2 bg-black/60 backdrop-blur-md rounded border border-white/10 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Stable Production Release
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
