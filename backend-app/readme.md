Chạy DB: docker compose up -d
npx prisma migrate dev --name init

1) DB (docker) bật trước bật Docker Destop
docker compose up -d
2) 
npm run prisma:generate
3) 
npm run prisma:migrate
4) Chạy dev server
npm run dev
