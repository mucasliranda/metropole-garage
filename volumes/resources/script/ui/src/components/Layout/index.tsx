import { ReactNode } from "react";
import Navbar from "../Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        w-full
        max-w-[1360px]
        px-8
        h-full
        flex
        flex-col
        justify-center
        items-center
        text-center
      "
    >
      <div
        className="
          w-full 
          h-[90vh] 
          flex 
          flex-col 
          text-zinc-50
          bg-slate-900 
          pb-2
        "
      >
        <Navbar />
        {children}
      </div>
    </div>
  )
}