import React, { useEffect, useState } from "react";
import useAxios from "@/hooks/useAxios";
import MyAds from "@/components/agencyAccount/MyAds";
import { useParams } from "react-router-dom";

export default function AgencyMyAdsPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ads, setAds] = useState([]);
  const { id } = useParams();

  const fetchMyAds = async (userId) => {
    try {
      setLoading(true);
      const response = await useAxios.get(`/ads/user/${userId}`);

      setAds(response.data?.data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch ads. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchMyAds(id);
    }
  }, [id]);

  if (loading) return <p className="text-center py-6">Loading ads...</p>;
  if (error) return <p className="text-center py-6 text-red-500">{error}</p>;

  return <MyAds data={ads} />;
}
