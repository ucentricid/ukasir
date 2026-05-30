export const metadata = {
  title: "uKasir Preview",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
