export default function InfoItem({ name, href, path }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex min-w-[59px] items-center gap-1">
        <p>{name}</p>
      </div>
      <a
        href={href}
        target="_blank"
      >
        {path}
      </a>
    </div>
  );
}
