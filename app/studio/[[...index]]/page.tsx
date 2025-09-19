// app/studio/[[...index]]/page.tsx
"use client";

import { Studio } from "sanity";

// ❗️ВИБЕРИ ПРАВИЛЬНИЙ ІМПОРТ `config` ЗАЛЕЖНО ВІД ТОГО, ДЕ ЛЕЖИТЬ sanity.config.ts:
// Якщо файл лежить у папці /sanity (найімовірніше у твоєму проєкті):
import config from "../../../sanity/sanity.config";

// Якщо раптом sanity.config.ts лежить у корені репозиторію (НЕ в /sanity),
// тоді ЗАМІНИ попередній рядок на це:
// import config from "../../../sanity.config";

export default function StudioPage() {
  return <Studio config={config} />;
}
