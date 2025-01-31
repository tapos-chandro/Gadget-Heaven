import {

  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,

} from "recharts";

const Charts = () => {
  return (

<div>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="name"
            label={{ value: "Pages", position: "insideBottomRight", offset: 0 }}
            scale="band"
          />
          <YAxis
            label={{ value: "Index", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    </div>
  );
};

export default Charts;
