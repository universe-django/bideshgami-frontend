import { useState, useEffect } from "react";
import useAxios from "@/hooks/useAxios";

export const useGetAd = (slug) => {
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchAd = async () => {
      try {
        setLoading(true);
        const response = await useAxios.get(`/ads/${slug}`);
        setAd(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAd();
  }, [slug]);

  return { ad, loading, error };
};
