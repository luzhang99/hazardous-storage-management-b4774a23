import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AddMaterialForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "提交成功",
      description: "物料信息已成功添加",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto p-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">
          <span className="text-red-500">*</span>物料名称
        </label>
        <Input placeholder="请输入物料名称" required />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          <span className="text-red-500">*</span>CAS号
        </label>
        <Input placeholder="请输入CAS号" required />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          <span className="text-red-500">*</span>物料编号
        </label>
        <Input placeholder="请输入物料编号" required />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          <span className="text-red-500">*</span>物料类型
        </label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="请选择物料类型" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="explosive">易制毒</SelectItem>
            <SelectItem value="toxic">有毒</SelectItem>
            <SelectItem value="corrosive">腐蚀性</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          <span className="text-red-500">*</span>重点监管
        </label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="是" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">是</SelectItem>
            <SelectItem value="no">否</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">应急措施</label>
        <Textarea placeholder="请输入物料应急措施" className="min-h-[100px]" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">备注</label>
        <Textarea placeholder="请输入备注信息" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">计量标准</label>
        <Input placeholder="存放天数*单价*存放总数量" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">计量公式</label>
        <div className="flex items-center gap-2">
          <Input placeholder="请输入开始天数" />
          <span>至</span>
          <Input placeholder="请输入结束天数" />
          <Input placeholder="请输入单价" />
          <Button type="button" size="icon" variant="outline">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <Button type="button" variant="outline">
          取消
        </Button>
        <Button type="submit">
          确定
        </Button>
      </div>
    </form>
  );
};

export default AddMaterialForm;