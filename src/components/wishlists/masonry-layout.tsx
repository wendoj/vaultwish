"use client";

import Masonry from "react-masonry-css";
import { breakpointColumnsObj } from "@/constants";

interface MasonryLayoutProps {
  children: React.ReactNode;
}

export default function MasonryLayout({ children }: MasonryLayoutProps) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {children}
    </Masonry>
  );
}
