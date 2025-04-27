'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, Button, Chip } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import DownloadIcon from '@mui/icons-material/Download';

const revenueData = [12000, 15000, 18000, 14000, 17000];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

const subscriptionData = [
  { label: 'Basic', value: 40 },
  { label: 'Premium', value: 35 },
  { label: 'VIP', value: 25 },
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

const RevenueManagement = () => {
  const [showFullHistory, setShowFullHistory] = useState(false);

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-md">
          <CardHeader title="Total Revenue" />
          <CardContent>
            <Typography variant="h5" className="font-bold">RM74,000</Typography>
            <Typography color="text.secondary">Last 5 months</Typography>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader title="Total Payouts" />
          <CardContent>
            <Typography variant="h5" className="font-bold">RM15,000</Typography>
            <Typography color="text.secondary">To Artists</Typography>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader title="Pending Payouts" />
          <CardContent>
            <Typography variant="h5" className="font-bold">RM5,000</Typography>
            <Typography color="text.secondary">Awaiting Approval</Typography>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <Card className="shadow-md">
          <CardHeader title="Monthly Revenue" />
          <CardContent>
            <BarChart
              xAxis={[{ id: 'months', data: months, scaleType: 'band' }]}
              series={[{ data: revenueData }]}
              height={300}
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

