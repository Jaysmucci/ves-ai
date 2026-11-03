import type { ReactNode } from "react";


interface AppLayoutProps {
    children: ReactNode,
    sidebar?: ReactNode,
    navbar?: ReactNode
}

function AppLayout({children, sidebar, navbar} : AppLayoutProps){
    return (
      <div className="flex h-screen">
        {sidebar}
        <div className="flex-1 flex flex-col">
          {navbar}

          {/* Main Content - This Renders the child Page     */}
          <main className="flex-1 overflow-y-auto font-geom">{children}</main>
        </div>
      </div>
    );
}

export default AppLayout;