// import { supabase } from "../lib/supabase";

/*
====================================
AMBIL SEMUA DATA
====================================
*/

import { supabase } from "../lib/supabase";

/*
==================================
GET DATA WEDDING
==================================
*/
export const getWedding = async () => {
  console.log("=== GET DATA DIMULAI ===");

  const { data, error } = await supabase
    .from("wedding")
    .select("*")
    .order("id", { ascending: false });

  console.log("DataSupabase:", data);
  console.log("Error dari Supabase:", error);

  if (error) {
    throw error;
  }

  console.log("=== GET DATA SELESAI ===");

  return data;
};
  
/*
====================================
TAMBAH PESAN
====================================
*/


/*
====================================
HAPUS PESAN
====================================
*/
