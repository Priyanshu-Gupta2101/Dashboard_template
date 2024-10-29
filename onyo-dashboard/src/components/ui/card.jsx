import { ResponsiveContainer } from "recharts";

export const Card = ({ children, className, ...props }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className, ...props }) => {
  return (
    <div
      className={`bg-gray-50 border-b px-6 py-4 rounded-t-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={`px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className, ...props }) => {
  return (
    <h3 className={`text-lg font-medium ${className}`} {...props}>
      {children}
    </h3>
  );
};

export const ChartCard = ({ title, children }) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-xs lg2:text-sm">{title}</CardTitle>
    </CardHeader>
    <CardContent className="h-[300px] sm:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export const StatsCard = ({
  title,
  value,
  change,
  changeColor = "text-green-500",
  subtitle,
}) => (
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-xs lg2:text-sm font-medium text-gray-500">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-xl lg2:text-2xl font-bold">{value}</div>
      <p className={`text-xs lg2:text-sm ${changeColor}`}>
        {change || subtitle}
      </p>
    </CardContent>
  </Card>
);
