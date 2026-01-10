import React, { useState } from "react";
import cardImg from "../../assets/cardImgg.jpg";
import {
  Edit,
  Eye,
  Search,
  Plus,
  MapPin,
  Building,
  Users,
  Calendar,
  MoreHorizontal,
  X,
  Check,
  Clock,
  AlertCircle,
  Filter,
  Trash2,
  Pause,
  Play,
} from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";

import { Skeleton } from "../ui/skeleton";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function MyAds({ data, loading = false }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAds, setSelectedAds] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredData = data?.filter((item) => {
    const matchesSearch = item.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "approved" && item.approved) ||
      (filterStatus === "pending" && !item.approved);
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: data?.length || 0,
    approved: data?.filter((item) => item.approved).length || 0,
    pending: data?.filter((item) => !item.approved).length || 0,
    totalQuota:
      data?.reduce((sum, item) => sum + (item.totalQuota || 0), 0) || 0,
  };

  if (loading) {
    return (
      <div className="space-y-4 p-4">
        <div className="flex gap-4 items-center justify-between">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-64" />
        </div>
        <div className="grid grid-cols-4 gap-4 mb-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-20 w-full" />
          ))}
        </div>
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-16 w-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 p-4">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">My Advertisements</h1>
          <p className="text-xs text-gray-500">
            Manage and monitor your job postings
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <Button size="sm" asChild>
          <Link to="/agency/ads" className="gap-2">
            <Plus size={16} />
            Create New Ad
          </Link>
        </Button>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <Input
              placeholder="Search ads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 h-9 text-sm"
            />
          </div>

          <div className="relative">
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[140px] h-9 text-sm">
                <Filter size={14} className="mr-2" />
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All ({stats.total})</SelectItem>
                <SelectItem value="approved">
                  Approved ({stats.approved})
                </SelectItem>
                <SelectItem value="pending">
                  Pending ({stats.pending})
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedAds.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">
              {selectedAds.length} selected
            </span>
            <Button
              size="sm"
              variant="outline"
              className="bg-orange-500 text-white"
            >
              <Pause size={14} className="mr-1" />
              End Quota
            </Button>
          </div>
        )}
      </div>

      <div className="flex flex-col p-2">
        {filteredData?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {filteredData.map((item) => (
              <div
                key={item._id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 max-w-md w-full mx-auto"
              >
                <div className="relative">
                  <img
                    src={item.banner || cardImg}
                    alt={item.title}
                    className="w-full h-60 object-cover rounded-t-xl"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
                    {item.approved ? "Approved" : "Pending"}
                  </div>
                </div>

                <div className="px-4 py-3">
                  <p className="text-lg font-bold text-gray-600 mb-1">
                    {item.title}
                  </p>

                  <p className="text-sm text-gray-600">
                    {item.currency?.symbol || "$"} {item.salary || 0}
                  </p>
                </div>

                <div className="border-t my-1"></div>
                <div className="flex justify-around py-2 px-3">
                  <Link
                    to={`/agency/ads/edit/${item.slug}`}
                    className="inline-flex justify-center items-center gap-1 text-gray-600 hover:text-blue-600 transition text-sm font-medium"
                  >
                    <Edit className="w-3.5 h-3.5" /> Edit
                  </Link>

                  <button className="inline-flex justify-center items-center gap-1 text-gray-600 hover:text-yellow-600 transition text-sm font-medium">
                    <Pause className="w-3.5 h-3.5" /> End Quota
                  </button>

                  <Link
                    to={`/agency/ads/view/${item.slug}`}
                    className="inline-flex justify-center items-center gap-1 text-gray-600 hover:text-green-600 transition text-sm font-medium"
                  >
                    <Eye className="w-3.5 h-3.5" /> View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <AlertCircle size={48} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">
              No ads found
            </h3>
            <p className="text-sm text-gray-500">
              {searchTerm
                ? "Try adjusting your search terms"
                : "Get started by creating your first ad"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
