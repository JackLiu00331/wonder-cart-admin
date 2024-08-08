"use client";
import { UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useEffect } from "react";
import { useStoreModal } from "@/hooks/user-store-modal";
const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
};

export default SetupPage;
