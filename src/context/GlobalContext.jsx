// import React, { createContext, useState, useEffect } from 'react';
// import { useUser } from '../hooks/authHook';

// export const GlobalContext = createContext();

// export const GlobalProvider = ({ children }) => {
//     console.log('global context');
//     const [user, setUser] = useState(null);
//     console.log('user: ', user);
//     const { user: data } = useUser();

//     // useEffect(() => {
//     //     const storedUser = localStorage.getItem('user');
//     //     if (storedUser) {
//     //         setUser(JSON.parse(storedUser));
//     //     }
//     // }, []);

//     // Lưu thông tin vào localStorage mỗi khi user thay đổi
//     //   useEffect(() => {
//     //     if (user) {
//     //       localStorage.setItem('user', JSON.stringify(user));
//     //     } else {
//     //       localStorage.removeItem('user'); // Xóa nếu user là null (đăng xuất)
//     //     }
//     //   }, [user]);

//     return <GlobalContext.Provider value={{ user, setUser }}>{children}</GlobalContext.Provider>;
// };
