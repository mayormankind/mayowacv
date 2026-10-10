//components/ui/VideoPlayer.tsx
"use client";
import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

interface VideoPlayerProps {
  videoUrl?: string;
  posterUrl?: string;
  title?: string;
}

function getEmbedUrl(url: string): string | null {
  if (!url || url === "#") return null;
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
  return null;
}

// Direct playback is limited to formats that work reliably across browsers.
function isDirectVideo(url: string): boolean {
  return /\.(mp4|webm)(\?.*)?$/i.test(url);
}

/**
 * Renders nothing when there is no playable URL — callers should let
 * screenshots lead the media section in that case.
 */
export default function VideoPlayer({
  videoUrl,
  posterUrl,
  title = "Project",
}: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  const embedUrl = videoUrl ? getEmbedUrl(videoUrl) : null;
  const isDirect = videoUrl ? isDirectVideo(videoUrl) : false;
  const hasVideo = Boolean(embedUrl || isDirect);

  if (!hasVideo) return null;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
      {playing ? (
        isDirect ? (
          <video
            src={videoUrl}
            className="absolute inset-0 w-full h-full object-contain"
            autoPlay
            playsInline
            preload="metadata"
            controls
            poster={posterUrl}
          />
        ) : (
          <iframe
            src={embedUrl!}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`${title} demo video`}
          />
        )
      ) : (
        <>
          {posterUrl && (
            <Image
              src={posterUrl}
              alt={`${title} preview`}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          )}
          <button
            type="button"
            aria-label="Play demo video"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex items-center justify-center group"
          >
            <span className="size-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center transition-colors group-hover:bg-primary">
              <Play className="text-white size-8 ml-1" aria-hidden />
            </span>
          </button>
        </>
      )}
    </div>
  );
}
