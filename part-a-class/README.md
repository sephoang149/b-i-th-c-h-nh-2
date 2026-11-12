# Phần A – Sổ chi tiêu (Class Component)

- Họ tên: Nguyễn Việt Hoàng
- Mã sinh viên: B25DCTV027

## Cách chạy
```bash
npm install
npm run dev
```
Mở link hiện ra (thường là http://localhost:5173).

## Đã làm
- Class Component: `App` giữ state `expenses` (dữ liệu mẫu trong `data.js`) và `filter`.
- `Clock`: chạy mỗi giây (`componentDidMount`), dừng khi ẩn (`componentWillUnmount`).
- `ExpenseForm`: controlled form + validate; `ExpenseList`: dùng `key`, xóa có `confirm`.
- Lọc theo loại, hiện tổng tiền; tiêu đề tab cập nhật bằng `componentDidUpdate`.
