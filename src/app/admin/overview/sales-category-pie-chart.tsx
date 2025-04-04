/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'

export default function SalesCategoryPieChart({ data }: { data: any[] }) {
  const RADIAN = Math.PI / 180
  const primaryHSL = '120, 100%, 30%' // Dark green color

  const renderCustomizedLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, index } = props
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
        className='text-xs'
      >
        {`${data[index]._id} ${data[index].totalSales} sales`}
      </text>
    )
  }

  return (
    <ResponsiveContainer width='100%' height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey='totalSales'
          cx='50%'
          cy='50%'
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={`hsl(${primaryHSL})`} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
