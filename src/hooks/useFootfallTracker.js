"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function generateId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function useFootfallTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Do not track admin side
    if (pathname && pathname.startsWith("/admin")) return;

    const trackPage = async () => {
      try {
        // 2. Check 7-day cookie
        if (document.cookie.includes("footfall_tracked=1")) {
          return; // Already tracked within the last 7 days
        }

        let visitorId = localStorage.getItem("visitor_id");
        if (!visitorId) {
          visitorId = `VIS-${generateId()}`;
          localStorage.setItem("visitor_id", visitorId);
        }

        let sessionId = sessionStorage.getItem("session_id");
        if (!sessionId) {
          sessionId = `SESS-${generateId()}`;
          sessionStorage.setItem("session_id", sessionId);
        }

        const userAgent = window.navigator.userAgent;
        
        let deviceType = "Desktop";
        if (/Tablet|iPad/i.test(userAgent) || (/Android/i.test(userAgent) && !/Mobile/i.test(userAgent))) deviceType = "Tablet";
        else if (/Mobi|Android|iPhone|iPod/i.test(userAgent)) deviceType = "Mobile";

        let browser = "Unknown";
        if (userAgent.indexOf("Chrome") > -1) browser = "Chrome";
        else if (userAgent.indexOf("Safari") > -1) browser = "Safari";
        else if (userAgent.indexOf("Firefox") > -1) browser = "Firefox";
        else if (userAgent.indexOf("Edge") > -1) browser = "Edge";
        else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("rv:") > -1) browser = "IE";

        let os = "Unknown OS";
        if (/Android/i.test(userAgent)) os = "Android";
        else if (/iPhone|iPad|iPod/i.test(userAgent) || (/Macintosh/i.test(userAgent) && /Mobile/i.test(userAgent))) os = "iOS";
        else if (/Win/i.test(userAgent)) os = "Windows";
        else if (/Mac/i.test(userAgent)) os = "MacOS";
        else if (/X11|Linux/i.test(userAgent)) os = "Linux";

        const payload = {
          visitorId,
          sessionId,
          browser,
          os,
          deviceType,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          pageUrl: window.location.href,
          referrer: document.referrer || "Direct",
          userAgent,
        };

        const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost/cassio-dry-cleaner/backend/api";
        const res = await fetch(`${apiBase}/footfall/track.php`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true, // Prevents request cancellation if user navigates away fast
        });

        if (res.ok) {
          // Set cookie to expire in 7 days (604800 seconds)
          document.cookie = `footfall_tracked=1; max-age=604800; path=/`;
        }
      } catch (err) {
        console.error("Failed to track footfall", err);
      }
    };

    // Defer tracking until browser main thread is idle (Non-blocking)
    const deferExecution = window.requestIdleCallback || ((cb) => setTimeout(cb, 1000));
    deferExecution(() => {
      trackPage();
    });
  }, [pathname]);
}
