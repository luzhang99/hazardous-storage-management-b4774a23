import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, Sidebar, SidebarContent, SidebarTrigger } from "@/components/ui/sidebar";
import { BarChart, Box, ChemicalIcon, Users, AlertTriangle, Package, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar className="border-r">
          <SidebarContent>
            <div className="px-3 py-4">
              <h2 className="mb-4 px-4 text-lg font-semibold">危化品仓储管理系统</h2>
              <nav className="space-y-1">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Box className="h-5 w-5" />
                  仪表盘
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Package className="h-5 w-5" />
                  物料管理
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Users className="h-5 w-5" />
                  用户管理
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  安全监控
                </Button>
              </nav>
            </div>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">系统概览</h1>
            <p className="text-gray-600">欢迎使用危化品仓储综合管理平台</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">总物料数量</CardTitle>
                <Package className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-gray-500">较上月增长 12%</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">库存预警</CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-gray-500">需要立即处理</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">本月入库量</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">456</div>
                <p className="text-xs text-gray-500">较上月增长 5%</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">活跃用户</CardTitle>
                <Users className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">89</div>
                <p className="text-xs text-gray-500">本周活跃用户</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>库存趋势</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center border rounded">
                  <p className="text-gray-500">库存趋势图表</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>安全监控</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center border rounded">
                  <p className="text-gray-500">安全监控数据</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;