"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Save,
  Share2,
  MessageSquare,
  Calendar,
  Map,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatPanel } from "@/components/ChatPanel";
import { ItineraryPanel } from "@/components/ItineraryPanel";
import { MapRouteView } from "@/components/MapRouteView";
import Link from "next/link";

type TabType = "chat" | "itinerary" | "map";

export default function TripPlanner() {
  const [activeTab, setActiveTab] = useState<TabType>("itinerary");

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Link href={"/"}>
              <Button variant="ghost" size="icon" className="rounded-xl">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h2>My Cultural Adventure</h2>
              <p className="text-sm text-muted-foreground">Nov 15-16, 2025</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden rounded-xl sm:flex"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share Plan
            </Button>
            <Button
              size="sm"
              className="rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700"
            >
              <Save className="mr-2 h-4 w-4" />
              Save Plan
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-t">
          <button
            onClick={() => setActiveTab("chat")}
            className={`flex flex-1 items-center justify-center gap-2 border-b-2 px-4 py-3 transition-colors ${
              activeTab === "chat"
                ? "border-cyan-600 bg-cyan-50/50 text-cyan-700"
                : "border-transparent text-muted-foreground hover:bg-gray-50 hover:text-foreground"
            }`}
          >
            <MessageSquare className="h-5 w-5" />
            <span className="hidden sm:inline">Chat</span>
          </button>
          <button
            onClick={() => setActiveTab("itinerary")}
            className={`flex flex-1 items-center justify-center gap-2 border-b-2 px-4 py-3 transition-colors ${
              activeTab === "itinerary"
                ? "border-cyan-600 bg-cyan-50/50 text-cyan-700"
                : "border-transparent text-muted-foreground hover:bg-gray-50 hover:text-foreground"
            }`}
          >
            <Calendar className="h-5 w-5" />
            <span className="hidden sm:inline">Itinerary</span>
          </button>
          <button
            onClick={() => setActiveTab("map")}
            className={`flex flex-1 items-center justify-center gap-2 border-b-2 px-4 py-3 transition-colors ${
              activeTab === "map"
                ? "border-cyan-600 bg-cyan-50/50 text-cyan-700"
                : "border-transparent text-muted-foreground hover:bg-gray-50 hover:text-foreground"
            }`}
          >
            <Map className="h-5 w-5" />
            <span className="hidden sm:inline">Map</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <div className="mx-auto h-full max-w-7xl">
          {/* Desktop Layout - Side by Side */}
          <div className="hidden h-full lg:grid lg:grid-cols-2 lg:gap-6 lg:p-6">
            {/* Left Panel - Chat or Itinerary */}
            <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-sm">
              {activeTab === "chat" ? (
                <ChatPanel />
              ) : activeTab === "itinerary" ? (
                <ItineraryPanel />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <p className="text-muted-foreground">
                    Switch to Itinerary or Chat
                  </p>
                </div>
              )}
            </div>

            {/* Right Panel - Map */}
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <MapRouteView />
            </div>
          </div>

          {/* Mobile/Tablet Layout - Tabs */}
          <div className="h-full lg:hidden">
            {activeTab === "chat" && (
              <div className="h-full bg-gray-50">
                <ChatPanel />
              </div>
            )}
            {activeTab === "itinerary" && (
              <div className="h-full bg-gray-50">
                <ItineraryPanel />
              </div>
            )}
            {activeTab === "map" && (
              <div className="h-full p-4">
                <MapRouteView />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
