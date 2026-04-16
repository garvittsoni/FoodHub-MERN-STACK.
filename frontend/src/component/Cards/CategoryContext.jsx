import { createContext, useContext, useEffect, useState, useMemo } from "react";
import api from "../../api";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [food_list, setFoodList] = useState([]);
  const [active, setActive] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // 🔐 TOKEN
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // 🛒 CART
  const [cart, setCart] = useState({});

  // ✅ BACKEND URL (IMPORTANT)
  const url = "http://localhost:4000";

  /* ================= FOOD ================= */
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await api.get("/api/food/list-food");
        if (res.data.success) {
          setFoodList(res.data.data);
        }
      } catch (err) {
        console.error("Food fetch error:", err);
      }
    };

    fetchFood();
  }, []);

  /* ================= CART ================= */

  const fetchCart = async (authToken) => {
    try {
      const res = await api.get("/api/cart/get", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (res.data.success) {
        setCart(res.data.cartData || {});
      }
    } catch (err) {
      if (err.response?.status !== 401) {
        console.log("Fetch cart error:", err);
      }
    }
  };

  useEffect(() => {
    if (token) {
      fetchCart(token);
    } else {
      setCart({});
    }
  }, [token]);

  /* ================= AUTH ================= */

  useEffect(() => {
    const syncToken = () => {
      const storedToken = localStorage.getItem("token") || "";
      setToken(storedToken);
    };

    window.addEventListener("authChange", syncToken);

    return () => {
      window.removeEventListener("authChange", syncToken);
    };
  }, []);

  /* ================= CART ACTIONS ================= */

  const increaseQty = async (id) => {
    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      await api.post(
        "/api/cart/add",
        { itemId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchCart(token);
    } catch (err) {
      console.log("Add cart error:", err);
    }
  };

  const decreaseQty = async (id) => {
    if (!token) return;

    try {
      await api.post(
        "/api/cart/remove",
        { itemId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchCart(token);
    } catch (err) {
      console.log("Remove cart error:", err);
    }
  };

  const toggleCart = async (id) => {
    if (cart[id]) {
      await decreaseQty(id);
    } else {
      await increaseQty(id);
    }
  };

  /* ================= FILTER ================= */

  const filtered = useMemo(() => {
    return food_list.filter((item) => {
      const searchLower = searchQuery.toLowerCase().trim();

      const matchesSearch =
        item.name.toLowerCase().includes(searchLower) ||
        item.category.toLowerCase().includes(searchLower);

      const matchesCategory =
        active === "All" ||
        item.category?.toLowerCase() === active.toLowerCase();

      return searchQuery ? matchesSearch : matchesCategory;
    });
  }, [active, searchQuery, food_list]);

  return (
    <CategoryContext.Provider
      value={{
        active,
        setActive,
        searchQuery,
        setSearchQuery,
        filtered,
        food_list,
        cart,
        toggleCart,
        increaseQty,
        decreaseQty,
        token,
        setToken,
        url, // ✅ FIXED
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);