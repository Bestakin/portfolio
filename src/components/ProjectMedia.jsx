import VideoShowcase from './VideoShowcase';

/** The visual for a project: its demo video if it has one, otherwise its image. */
export default function ProjectMedia({ project, autoPreview = false, className = '' }) {
  if (project.video) {
    return <VideoShowcase video={project.video} title={project.name} autoPreview={autoPreview} className={className} />;
  }
  return (
    <div className={`aspect-video w-full overflow-hidden rounded-xl border border-line bg-panel-2 ${className}`}>
      <img
        src={project.image}
        alt={`${project.name} interface preview`}
        loading="lazy"
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}
