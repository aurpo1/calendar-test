import React from "react";
import { firestore } from "./utils/firebase_config";

export default function FbTest() {
  const partner = firestore.collection("partner");
  console.log(partner);

  partner.doc("partner1").set({ owner_name: "cat", business_num: "1234" });

  // collection의 document인 "bucket_item"을 가져온다.
  partner
    .doc("partner1")
    .get()
    .then((doc) => {
      // document의 데이터를 가져옴
      console.log(doc.data());
      // document의 id를 가져옴
      console.log(doc.id);
    });

  return <div></div>;
}
