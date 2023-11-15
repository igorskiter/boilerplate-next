import { ChildrenElement } from '../interfaces';

const Container = ({ children }: ChildrenElement) => (
  <div className="p-2 flex flex-col justify-center items-center h-screen min-h-screen">
    {children}
  </div>
);

const Main = ({ children }: ChildrenElement) => (
  <main className="p-20 flex-1 flex flex-col justify-center items-center">
    {children}
  </main>
);

const Title = ({ children }: ChildrenElement) => (
  <h1 className="m-0 text-4xl text-center">
    {children}
  </h1>
);

const Description = ({ children }: ChildrenElement) => (
  <p className="text-center leading-1.5 text-lg">
    {children}
  </p>
);

const CodeTag = ({ children }: ChildrenElement) => (
  <code className="bg-gray-100 rounded-md mx-2 py-3 px-3 text-sm font-mono">
    {children}
  </code>
);

export { Container, Main, Title, Description, CodeTag };
