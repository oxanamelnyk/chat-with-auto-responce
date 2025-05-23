import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const useChatStore = create((set) => ({
  messages: [],
  chats: [],
  selectedChat: null,
  isChatsLoading: false,
  isMessagesLoading: false,

  getChats: async () => {
    set({ isChatsLoading: true });
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
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${chatId}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },
  setSelectedChat: (selectedChat) => set({ selectedChat }),
}));
