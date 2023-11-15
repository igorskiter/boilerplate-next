import Link from 'next/link';
import { ChildrenElement } from '../interfaces';

const FlexContainer = ({ children }: ChildrenElement) => (
  <div className="flex items-center justify-center flex-col flex-wrap max-w-800px mt-12">
    {children}
  </div>
);

const CardContent = ({ children }: ChildrenElement) => (
  <div
    // eslint-disable-next-line max-len
    className="p-6 border border-black rounded-lg transition-colors duration-150 hover:text-blue-500 hover:border-blue-500 w-full">
    {children}
  </div>
);

const StyledA = ({ children }: {children: ChildrenElement}) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a className="mb-4 text-xl" href="#">
    {children}
  </a>
);

type StyledLinkProps = {
  href: string,
  name: string
}

const StyledLink = ({ href, name }: StyledLinkProps) => (
  <Link href={href} passHref>
    <StyledA>{name}</StyledA>
  </Link>
);

type CardsProps = {
  link: string,
  name: string
}

/**
 * @constant Card
 * @param link - "/about;"
 * @param name - "About Page &rarr;"
 * @returns
 */
export default function Card({
  link = '',
  name = '',
}: CardsProps) {
  return (
    <FlexContainer>
      <CardContent>
        <StyledLink href={link} name={name} />
      </CardContent>
    </FlexContainer>
  );
}
