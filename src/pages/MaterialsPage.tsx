import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, RotateCcw, Download, Upload, Plus, Eye, Edit, Trash, Power } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import AddMaterialForm from '@/components/AddMaterialForm';

const MaterialsPage = () => {
  const { toast } = useToast();
  const [showAddForm, setShowAddForm] = useState(false);
  const [materials] = useState<Material[]>([
    {
      id: 1,
      name: "盐酸",
      casNo: "7647-01-0",
      code: "123134564654",
      type: "易制毒",
      isKeyMonitor: true,
      status: 'normal'
    },
    {
      id: 2,
      name: "乙醇",
      casNo: "111-15-9",
      code: "123134564654",
      type: "易制毒",
      isKeyMonitor: true,
      status: 'normal'
    },
    {
      id: 3,
      name: "甲醇",
      casNo: "111-15-9",
      code: "123134564654",
      type: "易制毒",
      isKeyMonitor: false,
      status: 'disabled'
    },
  ]);

  const handleAction = (action: string, material: Material) => {
    toast({
      title: `${action}操作`,
      description: `对物料 ${material.name} 执行${action}操作`,
    });
  };

  if (showAddForm) {
    return (
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">添加物料</h2>
          <Button variant="outline" onClick={() => setShowAddForm(false)}>
            返回列表
          </Button>
        </div>
        <AddMaterialForm />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <div className="space-y-6">
        {/* 搜索和过滤区域 */}
        <div className="flex flex-wrap gap-4">
          <Input 
            placeholder="输入物料名称" 
            className="max-w-[200px]"
          />
          <Input 
            placeholder="输入物料编号" 
            className="max-w-[200px]"
          />
          <Input 
            placeholder="输入CAS号" 
            className="max-w-[200px]"
          />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="选择物料状态" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="normal">正常</SelectItem>
              <SelectItem value="disabled">停用</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="选择物料类型" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="explosive">易制毒</SelectItem>
              <SelectItem value="toxic">有毒</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 操作按钮区域 */}
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="gap-2">
            <Search className="h-4 w-4" />
            查询
          </Button>
          <Button variant="outline" className="gap-2">
            <RotateCcw className="h-4 w-4" />
            重置
          </Button>
          <Button variant="outline" className="gap-2">
            <Upload className="h-4 w-4" />
            导入
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            导出
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            下载模板
          </Button>
        </div>

        <Button className="gap-2" onClick={() => setShowAddForm(true)}>
          <Plus className="h-4 w-4" />
          添加物料
        </Button>

        {/* 数据表格 */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>序号</TableHead>
                <TableHead>物料名称</TableHead>
                <TableHead>CAS号</TableHead>
                <TableHead>物料编号</TableHead>
                <TableHead>物料类型</TableHead>
                <TableHead>重点监管</TableHead>
                <TableHead>物料状态</TableHead>
                <TableHead className="text-right">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {materials.map((material) => (
                <TableRow key={material.id}>
                  <TableCell>{material.id}</TableCell>
                  <TableCell>{material.name}</TableCell>
                  <TableCell>{material.casNo}</TableCell>
                  <TableCell>{material.code}</TableCell>
                  <TableCell>{material.type}</TableCell>
                  <TableCell>
                    <Badge variant={material.isKeyMonitor ? "default" : "secondary"}>
                      {material.isKeyMonitor ? '是' : '否'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={material.status === 'normal' ? "success" : "destructive"}>
                      {material.status === 'normal' ? '正常' : '停用'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleAction('查看', material)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleAction('编辑', material)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleAction('删除', material)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleAction(material.status === 'normal' ? '停用' : '启用', material)}
                      >
                        <Power className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MaterialsPage;