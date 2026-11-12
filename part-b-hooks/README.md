# Phần B – Sổ chi tiêu (Function Component + Hooks)

- Họ tên: Nguyễn Việt Hoàng
- Mã sinh viên: B25DCTV027

## Cách chạy
1. Vào https://mockapi.io, tạo project, thêm resource `expenses` với các trường `content`, `amount`, `type`, `date`.
2. Dán link API vào `src/config.js`.
3. Chạy:
```bash
npm install
npm run dev
```

## Đã làm
- Viết lại Phần A bằng Function Component (`useState`, `useEffect`).
- Custom hook `useFetch`: lấy, thêm, xóa dữ liệu qua mockapi; có trạng thái đang tải và lỗi.
- `useRef` focus ô nhập sau khi thêm; `useContext` (`ThemeContext`) cho chế độ sáng/tối.
- Nâng cao: custom hook `useClock`.

## Hooks giúp khắc phục thách thức của Class ở đâu?
- **Không còn `this`, `constructor`, `bind`**: code ngắn hơn (xem `Clock`: 13 dòng → 5 dòng).
- **Logic gom một chỗ**: trong `useEffect`, bắt đầu và dọn dẹp (`setInterval`/`clearInterval`) nằm cạnh nhau, thay vì tách ở `componentDidMount` và `componentWillUnmount`.
- **Tái sử dụng logic**: tách thành `useClock`, `useFetch` dùng lại được; Class phải lặp code hoặc dùng cách phức tạp.
- **Chia sẻ dữ liệu dễ**: `useContext` cho theme, không cần truyền props qua nhiều tầng.
