type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  startSeconds?: number;
};

export function parseYouTubeUrl(url: string): {
  videoId: string;
  startSeconds?: number;
} | null {
  const videoIdMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?]+)/
  );
  if (!videoIdMatch?.[1]) return null;

  const startMatch = url.match(/[?&]t=(\d+)/);
  const startSeconds = startMatch ? Number(startMatch[1]) : undefined;

  return { videoId: videoIdMatch[1], startSeconds };
}

export function YouTubeEmbed({
  videoId,
  title,
  startSeconds,
}: YouTubeEmbedProps) {
  const embedParams = startSeconds ? `?start=${startSeconds}` : "";

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-surface-elevated">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}${embedParams}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
