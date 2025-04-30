interface ContentProps {
  children: React.ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  return (
    <div className="overflow-y-auto">
      {children}
    </div>
  );
};
