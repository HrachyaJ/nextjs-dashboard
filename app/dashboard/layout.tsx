import SideNav from '@/app/ui/dashboard/sidenav';

// Experimental features can be enabled in the next.config.js file
// and can be used to enable features that are not yet stable or are in beta.
// For example, the `ppr` feature can be enabled to use the new partial page rendering feature.
// export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}