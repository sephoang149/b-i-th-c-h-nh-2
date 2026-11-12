import { useState, useEffect } from "react";

// Lấy, thêm, xóa dữ liệu qua API
export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Lỗi " + res.status);
        return res.json();
      })
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  const add = async (item) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      if (!res.ok) throw new Error("Lỗi " + res.status);
      const created = await res.json();
      setData((prev) => [...prev, created]);
    } catch (err) {
      setError(err.message);
    }
  };

  const remove = async (id) => {
    try {
      const res = await fetch(`${url}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Lỗi " + res.status);
      setData((prev) => prev.filter((e) => e.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return { data, loading, error, add, remove };
}
