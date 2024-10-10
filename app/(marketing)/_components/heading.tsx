"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          your Ideas, Documents, & Plans, Unified, Welcome to{" "}
          <span className="underline">Lotion</span>
        </h1>
        <h3 className="text-base mb-3 sm:text-xl md:text-2xl font-medium">
          Lotion is the connected workspace where <br />
          better, faster work happens.
        </h3>
        {isLoading && (
          <div className="w-full flex items-center justify-center">
            <Spinner size="lg" />
          </div>
        )}
        {isAuthenticated && !isLoading && (
          <Link href="/documents">
            <Button>
              Enter Lotion
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        )}
        {!isAuthenticated && !isLoading && (
          <SignInButton mode="modal">
            <Button>
              Get Lotion free
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </SignInButton>
        )}
      </motion.div>
    </div>
  );
};

export default Heading;
