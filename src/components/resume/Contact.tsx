import { formatUrl } from '@/lib/utils';

type Props = {
  name: string;
  href: string;
};

export default function Contact({ name, href }: Props) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex min-w-[59px] items-center gap-1">
        <p>{name}</p>
      </div>
      <a
        href={href}
        target="_blank"
      >
        {formatUrl(href)}
      </a>
    </div>
  );
}
