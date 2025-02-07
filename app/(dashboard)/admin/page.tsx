import { getGraphRevenue } from "@/actions/getGraphData";
import getTotalBookings from "@/actions/getTotalBookings";
import getTotalRevenue from "@/actions/getTotalRevenue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { FaHotel } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { TrendingUp, Users, Calendar } from "lucide-react";

export default async function DashboardPage() {
  const { totalRevenue, totalTripjackRevenue } = await getTotalRevenue();
  const { flightBookings, hotelBookings } = await getTotalBookings();
  const graphData = await getGraphRevenue();

  return (
    <div className="flex-col space-y-6">
      {/* Header Section */}
      <div className="border-b bg-white dark:bg-gray-900 p-8">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Welcome to Dashboard
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Here&apos;s what&apos;s happening with your business today.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6 p-8 pt-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-cyan-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-cyan-600">
                    {totalRevenue}
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-green-500">+20.1%</span>
                    <span className="text-xs text-gray-500 ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Tripjack Revenue
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">
                    {totalTripjackRevenue}
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-green-500">+12.3%</span>
                    <span className="text-xs text-gray-500 ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Flight Bookings
                  </CardTitle>
                  <MdFlight className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-emerald-600">
                    {flightBookings}
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-green-500">+8.5%</span>
                    <span className="text-xs text-gray-500 ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Hotel Bookings
                  </CardTitle>
                  <FaHotel className="h-4 w-4 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">
                    {hotelBookings}
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-green-500">+15.7%</span>
                    <span className="text-xs text-gray-500 ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid gap-6">
              <RevenueChart data={graphData} />
            </div>

            {/* Quick Stats */}
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
                  <Calendar className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Add recent activity items here */}
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-2">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-sm font-medium">Performance Overview</CardTitle>
                  <Users className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Add performance metrics here */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
