import { supabase } from "../lib/supabase";

/*
====================================
GET DATA WEDDING
====================================
*/
export async function getData() {
  const { data, error } = await supabase
    .from("wedding")
    .select("*");
    console.log("data",data)

  if (error) {
    throw error;
  }

  return data;
}
 
/*
====================================
TAMBAH PESAN
====================================

*/
export async function createData(payload) {
  const { data, error } = await supabase
    .from("wedding")
    .insert([payload])
    .select();

  if (error) throw error;

  return data;
}

/*
====================================
HAPUS PESAN DI ADMIN
====================================

*/
export async function deleteData(id) {
  const { error } = await supabase
    .from("wedding")
    .delete()
    .eq("id", id);

  if (error) throw error;

  return true;
}


/*
====================================
DELETE SEMUA DATA di admin
====================================
*/
export async function deleteAllData() {
  const { error } = await supabase
    .from("wedding")
    .delete()
    .neq("id", 0);

  if (error) throw error;
}