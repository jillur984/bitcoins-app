import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '16Dec',
      uv: 47000,
      pv: 2400,
    },
    {
      name: '17Dec',
      uv: 45000,
      pv: 2800,
    },
    {
      name: '18Dec',
      uv: 5000,
      pv: 1500,
    },
    {
      name: '19Dec',
      uv: 2000,
      pv: 4000,
    },
    {
      name: '20Dec',
      uv: 4500,
      pv: 1000,
    },
    {
      name: '21Dec',
      uv: 6000,
      pv: 2000,
    },
    {
      name: '22Dec',
      uv: 1000,
      pv: 3500,
    },
    {
      
      uv: 4500,
      
    },
   
  ];
  
  

const Chart = () => {
  return (
    <ResponsiveContainer width="80%" height={400}>
      <LineChart className='mt-10'
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" axisLine={false} /> {/* Hide X Axis line */}
        <YAxis axisLine={false} /> {/* Hide Y Axis line */}
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="blue" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="uv" stroke="blue" strokeDasharray="3 4 5 2" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
