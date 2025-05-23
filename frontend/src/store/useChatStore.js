import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/";

export const useChatStore = create((set) => ({
  messages: [],
  chats: [],
  selectedChat: null,
  isChatsLoading: false,
  isMessegesLoading: false,

  getChats: async () => {
    set({ isChatLoading: true });
    try {
      const res = await axiosInstance.get("/chats");
      console.log(res.data);

      set({ chats: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isChatsLoading: false });
    }
  },

  getMessages: async (chatId) => {
    set({ isMessegesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${chatId}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isMessegesLoading: false });
    }
  },
  setSelectedChat: (selectedChat) => set({ selectedChat }),
}));
