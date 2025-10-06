Chạy DB: docker compose up -d
npx prisma migrate dev --name init


# 1) DB (docker) bật trước bật Docker Destop

docker compose up -d

# 2) Generate Prisma client (lần đầu hoặc sau khi đổi schema)

npm run prisma:generate

# 3) Migrate DB (lần đầu sẽ tạo bảng)

npm run prisma:migrate

# 4) Chạy dev server

npm run dev


Mục tiêu học
“init 1 cái dự án” → Khởi tạo project BE mới (skeleton).

“connect db postgre” → Kết nối PostgreSQL (ORM, migration, seed).

“tạo swagger” → Bật tài liệu API (OpenAPI/Swagger UI).

“làm 1–2 cái API test cho nó chạy” → Viết vài endpoint mẫu để chứng minh flow chạy OK.

“init ra để sau đào tạo là dùng cái đó” → Làm starter template để dùng dạy/đào tạo nội bộ.

“tìm cách hiểu càng sâu cái project… tạo sao cho nó clean ưng ý” → Ưu tiên kiến trúc sạch, chuẩn hoá cấu trúc thư mục, code style, config blabla
