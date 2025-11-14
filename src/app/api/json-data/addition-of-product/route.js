import * as fs from 'fs';
import { NextResponse } from "next/server";
import path from 'path';

function createProductId(existingData = []) {
  let newId;
  const existingIds = new Set(existingData.map(item => item.id));

  do {
    newId = Math.floor(1000000000 + Math.random() * 9000000000).toString();
  } while (existingIds.has(newId)); // Regenerate if ID already exists

  return newId;
}

export async function POST(req) {
      try {
            const data= await req.json();
            // console.log('data from frontend: ', data)
            const filePath = path.join(process.cwd(), 'public/content/products.json')
            let updatedData = []
            const fileContent = fs.readFileSync(filePath,"utf-8")
            if(fileContent.trim().length > 0){
                  updatedData = JSON.parse(fileContent)
                  // console.log(updatedData)
            }
            const newProductId = createProductId(updatedData)
            const finalData = {
                  product_id: newProductId,
                  ...data
            }
            updatedData.push(finalData);
            fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));

            return NextResponse.json('Success')
      } catch  {
            return NextResponse.json('Unsuccess')
      }
}
