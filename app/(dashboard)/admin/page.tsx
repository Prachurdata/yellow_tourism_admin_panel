import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import getTotalBookings from "@/actions/getTotalBookings";
import getTotalRevenue from "@/actions/getTotalRevenue";
import { getGraphRevenue } from "@/actions/getGraphData";
import { MdFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa";

import { Overview } from "@/components/ui/overview";

export default async function DashboardPage() {
  const { totalRevenue, totalTripjackRevenue } = await getTotalRevenue();
  const { flightBookings, hotelBookings } = await getTotalBookings();
  const graphData = await getGraphRevenue();

  console.log("graphData", graphData);
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{totalRevenue}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Tripjack Revenue
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {totalTripjackRevenue}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Flight Bookings
                    </CardTitle>
                    <MdFlight className="w-4 h-4" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{flightBookings}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Hotel Bookings
                    </CardTitle>
                    <FaHotel className="w-4 h-4" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{hotelBookings}</div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 ">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Flight Bookings</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview data={graphData} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
