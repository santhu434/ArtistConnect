

import { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, Button, Chip, Divider, LinearProgress } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import DownloadIcon from '@mui/icons-material/Download';
import PaidIcon from "@mui/icons-material/Paid";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

const revenueData = [
  { label: "Paper View", amount: 12000 },
  { label: "Tips & Jar", amount: 8500 },
  { label: "Subscriptions", amount: 20000 },
  { label: "Merchandize", amount: 15000 },
  { label: "Events", amount: 18500 },
];





const subscriptionData = [
  { label: 'Premium', value: 35 },
  { label: 'Gold', value: 25 },
];

const paymentHistory = [
  { id: 'TXN12345', user: 'John Doe', amount: 29.99, date: '2025-04-01', status: 'Success' },
  { id: 'TXN12346', user: 'Jane Smith', amount: 49.99, date: '2025-04-03', status: 'Success' },
  { id: 'TXN12347', user: 'Mike Johnson', amount: 9.99, date: '2025-04-05', status: 'Failed' },
];

const payoutRequests = [
  { id: 'PAYOUT001', artist: 'DJ Alpha', amount: 200, date: '2025-04-01', status: 'Pending' },
  { id: 'PAYOUT002', artist: 'Singer Beta', amount: 500, date: '2025-04-05', status: 'Completed' },
];

const revenueAlerts = [
  'High payout requests this month!',
  'Subscription revenue dropped 5% last week.',
];

const taxesAndDeductions = {
  taxPercentage: 15,
  platformFee: 10,
  otherDeductions: 5,
};


const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const monthlyRevenue = [2000, 15000, 14000, 18000, 22000, 20000, 24000];

const RevenueManagement = () => {


  return (
    <div className="p-4 md:p-8 bg-[#181A20] min-h-screen space-y-8">
      {/* Page Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <Typography variant="h5" className="font-bold mb-4 md:mb-0">
          Revenue Management
        </Typography>
        <Button variant="contained" startIcon={<DownloadIcon />} className="bg-gradient-to-r from-purple-700 to-pink-500 text-white">
          Export Report
        </Button>
      </div>

      {/* Revenue Overview */}
      <div className="max-w-4xl mx-auto p-6 space-y-8 bg-white rounded-xl shadow-lg">
        {/* Revenue Breakdown */}
        <section>
          <h2 className="text-xl font-bold mb-6 text-gray-800">Total Revenue</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {revenueData.map(({ label, amount }) => (
              <div
                key={label}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-default"
              >
                <p className="text-gray-600 font-semibold">{label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">RM{amount.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col sm:flex-row sm:space-x-8 gap-6">
          {/* Total Payouts Card */}
          <div className="flex-1 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-2">Total Payouts</h3>
            <p className="text-3xl font-extrabold tracking-wide">RM15,000</p>
          </div>

          {/* Pending Payouts Card */}
          <div className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-2">Pending Payouts</h3>
            <p className="text-3xl font-extrabold tracking-wide">RM5,000</p>
            <p className="mt-1 text-sm font-medium opacity-80">Awaiting Approval</p>
          </div>
        </div>
      </div>


      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <Card className="shadow-md">
          <CardHeader title="Monthly Revenue" />
          <CardContent>
            <BarChart
              height={300}
              xAxis={[
                {
                  id: "months",
                  data: months,
                  scaleType: "band",
                },
              ]}
              series={[
                {
                  data: monthlyRevenue,
                  label: "Revenue (RM)",
                  color: "#1976d2", // MUI primary color blue
                },
              ]}
              padding={{ left: 60, bottom: 40 }}
              xAxisLabel="Month"
              yAxisLabel="Revenue (RM)"
            />
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="shadow-md">
          <CardHeader title="Revenue by Subscription" />
          <CardContent>
            <PieChart
              series={[
                {
                  data: subscriptionData.map((item, index) => ({
                    id: index,
                    value: item.value,
                    label: item.label,
                  })),
                },
              ]}
              height={300}
            />
          </CardContent>
        </Card>
      </div>

      {/* Payment History */}
      <div>
        <Typography variant="h5" className="font-bold mb-4">Payment History</Typography>
        <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
          {paymentHistory.map((payment) => (
            <div key={payment.id} className="flex flex-col md:flex-row md:items-center justify-between border-b pb-3">
              <div>
                <Typography className="text-gray-600 font-semibold">{payment.user}</Typography>
                <Typography variant="body2" color="text.secondary">{payment.date}</Typography>
              </div>
              <div className="flex items-center gap-4">
                <Typography className="text-gray-600 font-semibold">RM{payment.amount}</Typography>
                <Chip
                  label={payment.status}
                  color={payment.status === 'Success' ? 'success' : 'error'}
                  size="small"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payout Requests */}
      <div>
        <Typography variant="h5" className="font-bold mb-4">Payout Requests</Typography>
        <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
          {payoutRequests.map((payout) => (
            <div key={payout.id} className="flex flex-col md:flex-row md:items-center justify-between border-b pb-3">
              <div>
                <Typography className="text-gray-600 font-semibold">{payout.artist}</Typography>
                <Typography variant="body2" color="text.secondary">{payout.date}</Typography>
              </div>
              <div className="flex items-center gap-4">
                <Typography className="text-gray-600 font-semibold">RM{payout.amount}</Typography>
                <Chip
                  label={payout.status}
                  color={payout.status === 'Completed' ? 'success' : 'warning'}
                  size="small"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Alerts */}
      <div>
        <Typography variant="h5" className="font-bold mb-4">Revenue Alerts</Typography>
        <div className="bg-white rounded-lg shadow-md p-4 space-y-3">
          {revenueAlerts.map((alert, index) => (
            <Typography key={index} color="error">{alert}</Typography>
          ))}
        </div>
      </div>

      {/* Taxes and Deductions */}
      <div>
        <Typography variant="h5" className="font-bold mb-4">Taxes and Deductions</Typography>
        <div className="bg-white  text-gray-600 rounded-lg shadow-md p-4">
          <Typography>Tax: {taxesAndDeductions.taxPercentage}%</Typography>
          <Typography>Platform Fee: {taxesAndDeductions.platformFee}%</Typography>
          <Typography>Other Deductions: {taxesAndDeductions.otherDeductions}%</Typography>
        </div>
      </div>
    </div>
  );
};

export default RevenueManagement;

