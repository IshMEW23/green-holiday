// Props used by the dashboard card component
interface DashboardCardProps {
  title: string;
  value: string;
  subtitle: string;
}

export default function DashboardCard({
  title,
  value,
  subtitle,
}: DashboardCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      {/* Card title */}
      <p className="text-sm font-semibold text-[#66736a]">
        {title}
      </p>

      {/* Main value */}
      <h3 className="mt-3 font-sans text-4xl font-bold text-[#17251b]">
        {value}
      </h3>

      {/* Small description */}
      <p className="mt-3 text-sm text-[#439646]">
        {subtitle}
      </p>
    </div>
  );
}