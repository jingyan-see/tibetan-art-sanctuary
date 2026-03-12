import { useQuery } from "@tanstack/react-query";
import { fetchThangkas, fetchBuddhas, fetchZodiac } from "@/data/thangkaData";
import type { Thangka, Deity, ZodiacJSON } from "@/data/thangkaData";

export function useThangkas() {
  return useQuery<Thangka[]>({
    queryKey: ["thangkas"],
    queryFn: fetchThangkas,
  });
}

export function useBuddhas() {
  return useQuery<Deity[]>({
    queryKey: ["buddhas"],
    queryFn: fetchBuddhas,
  });
}

export function useZodiac() {
  return useQuery<ZodiacJSON[]>({
    queryKey: ["zodiac"],
    queryFn: fetchZodiac,
  });
}
