import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  date: string;
  source: string;
  author: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function CourseCard({
  title,
  description,
  date,
  source,
  author,
  image,
  links,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center rounded-full bg-white">
        <Avatar className="m-auto size-12 border">
          <AvatarImage
            src={image}
            alt={title}
            className="object-contain"
          />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        <h2 className="font-semibold leading-none">{title}</h2>
        <p className="text-sm text-muted-foreground">
          {source && <span>{source} • </span>}
          {author && <span>{author} • </span>}
          {date && <span>{date}</span>}
        </p>
        {description && (
          <span className="prose text-sm text-muted-foreground dark:prose-invert">
            {description}
          </span>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={link.href}
              key={idx}
            >
              <Badge
                key={idx}
                title={link.title}
                className="flex gap-2"
              >
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
