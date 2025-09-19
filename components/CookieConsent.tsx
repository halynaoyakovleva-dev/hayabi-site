"use client";
import { useEffect, useState } from "react";
export default function CookieConsent(){
  const [ok, setOk] = useState(true);
  useEffect(()=>{ try{ setOk(localStorage.getItem("cookie-ok")==="1"); }catch{} },[]);
  if(ok) return null;
  return (<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-xl w-[92vw] rounded-2xl border bg-white shadow p-4 text-sm">
    We use lightweight analytics (Plausible) and essential cookies to improve this site.
    <div className="mt-3 flex gap-2 justify-end">
      <button onClick={()=>{ try{ localStorage.setItem("cookie-ok","1"); }catch{}; setOk(true); }} className="rounded-xl px-3 py-1.5 bg-emerald-600 text-white">OK</button>
    </div></div>);
}
