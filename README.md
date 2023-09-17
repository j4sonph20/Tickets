# Cấu trúc Project

src
 - components/:
    - Chứa các component thuần về UI, được tái sử dụng ở nhiều nơi
    - Các componet này thường không bao gồm logic của ứng dụng (call API, ...)
        VD: Button, card, header, footer, sidebar, ...

 - modules/module-name/: 
    - Chứa các component cấu thành 1 page hoặc 1 chức năng cụ thể

 - layouts/:
    - chứa các component layout cho react-router

 - apis/:
    - setup thư viện gọi API
    - setup các hàm gọi API
