import { ReactNode } from "react";

function matchPathToPage(path: string, page: string): boolean {
  const pathSegments = path.split('/').filter((segment) => segment !== '');
  const pageSegments = page.split('/').filter((segment) => segment !== '');

  if (pathSegments.length !== pageSegments.length) {
    return false;
  }

  return pathSegments.every((segment, index) => {
    return segment.startsWith(':') || segment === pageSegments[index];
  });
}

export default function Route({ path, page, children }: { path: string, page: string, children: ReactNode }) {
  if (matchPathToPage(path, page)) {
    return <>{children}</>;
  }
  return null;
}