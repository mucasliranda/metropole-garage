import { ReactNode } from "react";

export default function VehicleGrid({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        h-full  
        grid
        grid-cols-[repeat(auto-fit,minmax(240px,1fr))]
        grid-rows-[repeat(auto-fit,120px)]
        gap-4
        p-4

        overflow-y-auto
        overflow-x-hidden
      "
    >
      {children}
    </div>
  )
}