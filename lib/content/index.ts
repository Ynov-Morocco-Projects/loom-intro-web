import en from "./en";
import fr from "./fr";
import type { Content } from "./types";

export type Lang = "fr" | "en";
export type { Content, IconName, ChatMessage } from "./types";

export const content: Record<Lang, Content> = { fr, en };
export const defaultLang: Lang = "fr";
