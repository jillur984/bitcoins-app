
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
];
const COLORS = ["#0088FE", "#FFBB28"]; // Blue and Yellow

const Circle = () => {
  return (
    <>
      <div className="flex items-center gap-8">
        {" "}
        {/* Adjust gap to control spacing */}
        {/* Pie Chart on the left */}
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        {/* Circle and Text on the right */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm sm:text-base">
              Crowdsale investors: 80%
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-sm sm:text-base">Foundation: 20%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Circle;
