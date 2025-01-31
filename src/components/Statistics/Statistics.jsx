// import { useContext } from "react";
import {
  ComposedChart,

} from "recharts";
// import { ContextProvider } from "../../Context/Context";
import Charts from "./Charts";
import { Helmet } from "react-helmet";

const Statistics = () => {
//   const { addCart } = useContext(ContextProvider);


  const data = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'Page F',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];


  return (
    <div>
              <Helmet>
        <meta charSet="utf-8" />
        <title>Statistics</title>
        {/* <link rel="canonical" href={favIcon} /> */}
      </Helmet>
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20,
        }}
      >

        <Charts/>

      </ComposedChart>
    </div>
  );
};

export default Statistics;
