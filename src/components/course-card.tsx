import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { CardContent, CardFooter, CardTitle } from './ui/card';

interface Props {
  title: string;
  description: string;
  date: string;
  source: string;
  author: string;
  active: boolean;
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
      <div className="absolute -left-16 top-2 flex items-center justify-center rounded-full bg-muted">
        <Avatar className="flex size-12 items-center justify-center border">
          <AvatarImage
            src={image}
            alt={title}
            className="object-contain"
          />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <CardTitle className="text-base">{title}</CardTitle>
      <CardContent className="mt-auto flex flex-col gap-1">
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
      </CardContent>
      <CardFooter className="mb-1">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
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
                  className="flex gap-2 px-2 py-1 text-xs"
                >
                  {link.icon}
                  {link.title}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </li>
  );
}
