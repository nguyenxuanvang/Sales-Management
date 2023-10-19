const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const authenticateJWT = require('./middlewares/authenticateJWT');
const e = require('express');
const port = 3100;

app.use(cors());
app.use(express.json());
// Token Unique

const users = [
  {
    tenDangNhap: 'letdiv2023',
    matKhau: '123',
    hoTen: 'Nguyễn Xuân Vang',
    dienThoai: '0123456789',
    email: 'vangnguyen@gmail.com',
    diaChi: 'Đà Nẵng',
    tenCuaHang: 'Vang Store',
    dsNhanVien: [
      {
        id: 1,
        tenNguoiDung: 'Lê Văn Chương',
        tenDangNhap: 'chuongle123',
        matKhau: '123456',
        email: 'chuongle@gmail.com',
        diaChi: 'Đà Nẵng',
        ngaySinh: '25/07/2005',
        dienThoai: '0123456789',
        vaiTro: 'Nhân Viên Thu Ngân',
        trangThai: true,
        ghiChu: ''
      },
      {
        id: 2,
        tenNguoiDung: 'Huỳnh Văn Thiện',
        tenDangNhap: 'thienhuynh127',
        matKhau: '123456',
        email: 'thienhuynh@gmail.com',
        diaChi: 'Đắk Lắk',
        ngaySinh: '15/09/2002',
        dienThoai: '0123654789',
        vaiTro: 'Nhân Viên Kiểm Kho',
        trangThai: false,
        ghiChu: ''
      },
      {
        id: 3,
        tenNguoiDung: 'Nguyễn Trần Anh Thắng',
        tenDangNhap: 'thangnguyen159',
        matKhau: '123456',
        email: 'anhthang@gmail.com',
        diaChi: 'Quảng Ngãi',
        ngaySinh: '07/10/2002',
        dienThoai: '0165879423',
        vaiTro: 'Nhân Viên Kiểm Kho',
        trangThai: true,
        ghiChu: ''
      },
      {
        id: 4,
        tenNguoiDung: 'Hồ Văn Ý',
        tenDangNhap: 'yhovan177',
        matKhau: '123456',
        email: 'vany@gmail.com',
        diaChi: 'Hồ Chí Minh',
        ngaySinh: '15/05/2002',
        dienThoai: '0518749263',
        vaiTro: 'Nhân Viên Thu Ngân',
        trangThai: false,
        ghiChu: ''
      },
      {
        id: 5,
        tenNguoiDung: 'Cù Huy Bảo',
        tenDangNhap: 'huybao777',
        matKhau: '123456',
        email: 'huybao@gmail.com',
        diaChi: 'Đà Nẵng',
        ngaySinh: '25/11/1999',
        dienThoai: '0589764321',
        vaiTro: 'Nhân Viên Kiểm Kho',
        trangThai: true,
        ghiChu: ''
      }
    ],
    dsHangHoa: [
      {
        maHang: 1,
        tenHang: 'TV SamSung',
        nhomHang: 'TV',
        giaBan: 15000000,
        giaVon: 12000000,
        tonKho: 50,
        donViTinh: 'Cái',
        anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDrRK-TRhKIqcx_Dsfpb_px_J__jibl5jdA&usqp=CAU'
      },
      {
        maHang: 2,
        tenHang: 'Máy Quạt',
        nhomHang: 'Đồ Gia Dụng',
        giaBan: 300000,
        giaVon: 250000,
        tonKho: 100,
        donViTinh: 'Cái',
        anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevogqIza9djo2qjnmDYwJw-t42vKsMg85gQ&usqp=CAU'
      },
      {
        maHang: 3,
        tenHang: 'Áo Thun Nam',
        nhomHang: 'Thời Trang',
        giaBan: 500000,
        giaVon: 350000,
        tonKho: 250,
        donViTinh: 'Cái',
        anh: 'https://product.hstatic.net/1000361985/product/den-_e77e3db9ddd44d6d9c5ad99f6670029b_grande.jpg'
      },
      {
        maHang: 4,
        tenHang: 'TV SamSung',
        nhomHang: 'TV',
        giaBan: 15000000,
        giaVon: 12000000,
        tonKho: 50,
        donViTinh: 'Cái',
        anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDrRK-TRhKIqcx_Dsfpb_px_J__jibl5jdA&usqp=CAU'
      },
      {
        maHang: 5,
        tenHang: 'Máy Quạt',
        nhomHang: 'Đồ Gia Dụng',
        giaBan: 300000,
        giaVon: 250000,
        tonKho: 100,
        donViTinh: 'Cái',
        anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevogqIza9djo2qjnmDYwJw-t42vKsMg85gQ&usqp=CAU'
      },
      {
        maHang: 6,
        tenHang: 'Áo Thun Nam',
        nhomHang: 'Thời Trang',
        giaBan: 500000,
        giaVon: 350000,
        tonKho: 250,
        donViTinh: 'Cái',
        anh: 'https://product.hstatic.net/1000361985/product/den-_e77e3db9ddd44d6d9c5ad99f6670029b_grande.jpg'
      },
      {
        maHang: 7,
        tenHang: 'TV SamSung',
        nhomHang: 'TV',
        giaBan: 15000000,
        giaVon: 12000000,
        tonKho: 50,
        donViTinh: 'Cái',
        anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDrRK-TRhKIqcx_Dsfpb_px_J__jibl5jdA&usqp=CAU'
      },
      {
        maHang: 8,
        tenHang: 'Máy Quạt',
        nhomHang: 'Đồ Gia Dụng',
        giaBan: 300000,
        giaVon: 250000,
        tonKho: 100,
        donViTinh: 'Cái',
        anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevogqIza9djo2qjnmDYwJw-t42vKsMg85gQ&usqp=CAU'
      },
      {
        maHang: 9,
        tenHang: 'Áo Thun Nam',
        nhomHang: 'Thời Trang',
        giaBan: 500000,
        giaVon: 350000,
        tonKho: 250,
        donViTinh: 'Cái',
        anh: 'https://product.hstatic.net/1000361985/product/den-_e77e3db9ddd44d6d9c5ad99f6670029b_grande.jpg'
      },
      {
        maHang: 10,
        tenHang: 'TV SamSung',
        nhomHang: 'TV',
        giaBan: 15000000,
        giaVon: 12000000,
        tonKho: 50,
        donViTinh: 'Cái',
        anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDrRK-TRhKIqcx_Dsfpb_px_J__jibl5jdA&usqp=CAU'
      },
      {
        maHang: 11,
        tenHang: 'Máy Quạt',
        nhomHang: 'Đồ Gia Dụng',
        giaBan: 300000,
        giaVon: 250000,
        tonKho: 100,
        donViTinh: 'Cái',
        anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevogqIza9djo2qjnmDYwJw-t42vKsMg85gQ&usqp=CAU'
      },
      {
        maHang: 12,
        tenHang: 'Áo Thun Nam',
        nhomHang: 'Thời Trang',
        giaBan: 500000,
        giaVon: 350000,
        tonKho: 250,
        donViTinh: 'Cái',
        anh: 'https://product.hstatic.net/1000361985/product/den-_e77e3db9ddd44d6d9c5ad99f6670029b_grande.jpg'
      }
    ]
  }
];
const categories = [
  {
    id: 1,
    tenNhomHang: 'TV'
  },
  {
    id: 2,
    tenNhomHang: 'Đồ Gia Dụng'
  },
  {
    id: 3,
    tenNhomHang: 'Thời Trang'
  } 
];
const findID = (list) => {
  if (list.length === 0) {
    return 1;
  }
  else {
    return list.length + 1;
  }
}
const findMaHang = (list) => {
  if(list.length === 0) {
    return 1;
  }
  else {
    return list[list.length-1].maHang + 1;
  }
}
app.get('/', (req, res) => {
  res.send('LetDiv');
});
app.get('/employees', authenticateJWT, (req, res) => {
  const { tenDangNhap } = req.user;
  const target = users.find(item => item.tenDangNhap === tenDangNhap);
  let {
    search,
    page
  } = req.query;
  let list = target.dsNhanVien;
  if(search) {
    let filterList = list.filter(item => item.tenDangNhap.toLowerCase().includes(search.toLowerCase()));
    if (filterList.length === 0) {
      list = list.filter(item => item.tenNguoiDung.toLowerCase().includes(search.toLowerCase()));
    }
    else {
      list = filterList;
    }
  }
  let filterList = [];
  if (!page || Number(page) === 1) {
    for (let i = 0; i < 5; i++) {
      if (list[i]) {
        filterList.push(list[i]);
      }
    }
  }
  else {
    let dem = 1;
    let index = 0;
    for (let i = 0; i < list.length; i += 1) {
      if (dem === Number(page)) {
        index = i;
        break;
      }
      if (((i + 1) % 5) === 0) {
        dem += 1;
      }
    }
    if (index !== 0) {
      for (let i = index; i < index + 5; i++) {
        if (list[i]) {
          filterList.push(list[i]);
        }
      }
    }
  }
  res.json(filterList);
});
app.post('/employee', authenticateJWT, (req, res) => {
  const { tenDangNhap } = req.user;
  const target = users.find(item => item.tenDangNhap === tenDangNhap);
  const {
    tenDangNhap: tenDangNhapNV,
    tenNguoiDung,
    matKhau,
    vaiTro,
    email,
    diaChi,
    ngaySinh,
    dienThoai,
    ghiChu,
    trangThai
  } = req.body;
  let check = true;
  let list = [];
  if (target.dsNhanVien) {
    list = target.dsNhanVien;
  }
  for (let i = 0; i < list.length; i += 1) {
    if (tenDangNhapNV === list[i].tenDangNhap) {
      check = false;
      break;
    }
  }
  if (check) {
    const id = findID(list);
    const newEmployee = {
      tenDangNhap: tenDangNhapNV,
      tenNguoiDung,
      matKhau,
      vaiTro,
      email,
      diaChi,
      ngaySinh,
      dienThoai,
      ghiChu,
      trangThai,
      id
    }
    target.dsNhanVien.push(newEmployee);
    res.json(newEmployee);
  }
  else {
    res.sendStatus(400);
  }
});
app.patch('/employee', authenticateJWT, (req, res) => {
  const { tenDangNhap } = req.user;
  const target = users.find(item => item.tenDangNhap === tenDangNhap);
  const newEmployee = req.body;
  let index = 0;
  for (let i = 0; i < target.dsNhanVien.length; i += 1) {
    if (target.dsNhanVien[i].id === newEmployee.id) {
      index = i;
      break;
    }
  }

  if (target.dsNhanVien[index].tenDangNhap === newEmployee.tenDangNhap) {
    target.dsNhanVien[index] = {
      ...target.dsNhanVien[index],
      ...newEmployee
    }
    res.json(target.dsNhanVien[index]);
  }
  else {
    let check = true;
    for (let i = 0; i < target.dsNhanVien.length; i += 1) {
      if (target.dsNhanVien[i].tenDangNhap === newEmployee.tenDangNhap) {
        check = false;
        break;
      }
    }
    if (check) {
      target.dsNhanVien[index] = {
        ...target.dsNhanVien[index],
        ...newEmployee
      }
      res.json(target.dsNhanVien[index]);
    }
    else {
      res.sendStatus(400);
    }
  }
});
app.delete('/employee', authenticateJWT, (req, res) => {
  const { tenDangNhap } = req.user;
  const target = users.find(item => item.tenDangNhap === tenDangNhap);
  const { id } = req.body;
  let index = 0;
  for (let i = 0; i < target.dsNhanVien.length; i += 1) {
    if (target.dsNhanVien[i].id === id) {
      index = i;
      break;
    }
  }
  target.dsNhanVien.splice(index, 1);
  for (let i = index; i < target.dsNhanVien.length; i += 1) {
    target.dsNhanVien[i].id -= 1;
  }
  res.json(target.dsNhanVien);
})
app.get('/products', authenticateJWT, (req,res) => {
  const { tenDangNhap } = req.user;
  const target = users.find(item => item.tenDangNhap === tenDangNhap);
  const search = req.query.search;
  const category = req.query.category;
  const page = req.query.page;
  let list = target.dsHangHoa;
  if(category) {
    list = list.filter(item => item.nhomHang === category);
  }
  if(search) {
    list = list.filter(item => item.tenHang.toLowerCase().includes(search.toLowerCase()));
  }
  let filterList = [];
  if (!page || Number(page) === 1) {
    for (let i = 0; i < 6; i++) {
      if (list[i]) {
        filterList.push(list[i]);
      }
    }
  }
  else {
    let dem = 1;
    let index = 0;
    for (let i = 0; i < list.length; i += 1) {
      if (dem === Number(page)) {
        index = i;
        break;
      }
      if (((i + 1) % 6) === 0) {
        dem += 1;
      }
    }
    if (index !== 0) {
      for (let i = index; i < index + 6; i++) {
        if (list[i]) {
          filterList.push(list[i]);
        }
      }
    }
  }
  res.json(filterList); 
});
app.post('/product',authenticateJWT,(req,res) => {
  const { tenDangNhap } = req.user;
  const target = users.find(item => item.tenDangNhap === tenDangNhap);
  const newProduct = req.body;
  newProduct.maHang = findMaHang(target.dsHangHoa);
  target.dsHangHoa.push(newProduct);
  res.json(newProduct);
});
app.patch('/product',authenticateJWT,(req,res) => {
  const { tenDangNhap } = req.user;
  const target = users.find(item => item.tenDangNhap === tenDangNhap);
  const newProduct = req.body;
  let index = 0;
  for(let i = 0; i < target.dsHangHoa.length; i += 1) {
    if(target.dsHangHoa[i].maHang === Number(newProduct.maHang)) {
      index = i;
      break;
    }
  }
  target.dsHangHoa[index] = {
    ...target.dsHangHoa[index],
    ...newProduct
  }
  res.json(target.dsHangHoa[index]);
});
app.patch('/products',authenticateJWT,(req,res) => {
  const { tenDangNhap } = req.user;
  const target = users.find(item => item.tenDangNhap === tenDangNhap);
  const productList = req.body;
  for(let i = 0; i < productList.length; i += 1) {
    for(let j = 0; j < target.dsHangHoa.length; j += 1) {
      if(target.dsHangHoa[j].maHang === productList[i].maHang) {
        target.dsHangHoa[j].tonKho -= productList[i].quantity;
        break;
      }
    }
  }
  res.json(productList);
});
app.delete('/product',authenticateJWT,(req,res) => {
  const { tenDangNhap } = req.user;
  const target = users.find(item => item.tenDangNhap === tenDangNhap);
  const maHang = req.body.maHang;
  let index = 0;
  for(let i = 0; i < target.dsHangHoa.length; i += 1) {
    if(target.dsHangHoa[i].maHang === Number(maHang)) {
      index = i;
      break;
    }
  }
  target.dsHangHoa.splice(index,1);
  res.json(target.dsHangHoa);
});
app.patch('/orderProducts',authenticateJWT,(req,res) => {
  const { tenDangNhap } = req.user;
  const target = users.find(item => item.tenDangNhap === tenDangNhap);
  const cart = req.body;
  for(let i = 0; i < cart.length; i += 1) {
    for(let j = 0; j < target.dsHangHoa.length; j += 1) {
      if(target.dsHangHoa[j].maHang === cart[i].maHang) {
        target.dsHangHoa[j].tonKho += 50;
        break;
      }
    }
  }
  res.json(cart);
})
app.get('/categories',(req,res) => {
  res.json(categories);
});
app.get('/user', authenticateJWT, (req, res) => {
  const { tenDangNhap } = req.user;
  const target = users.find(item => item.tenDangNhap === tenDangNhap);
  res.json(target);
});
app.post('/login', (req, res) => {
  const { tenDangNhap, matKhau } = req.body;
  const target = users.find(item => item.tenDangNhap === tenDangNhap && item.matKhau === matKhau);
  if (target) {
    delete target.password;
    const accessToken = jwt.sign(target, process.env.JWT_SECRET_KEY, { expiresIn: '60 days' });
    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
});
app.post('/registration', (req, res) => {
  let check = true;
  const newUser = req.body;
  for (let i = 0; i < users.length; i += 1) {
    if (newUser.tenDangNhap === users[i].tenDangNhap) {
      check = false;
      break;
    }
  }
  if (check) {
    //newUser.id = users.length + 1;
    newUser.dsNhanVien = [];
    newUser.dsHangHoa = [];
    users.push(newUser);
    res.sendStatus(200);
  }
  else {
    res.sendStatus(401);
  }

})
app.get('/my-product', authenticateJWT, (req, res) => {
  console.log(req.user);
  res.json(req.user);
});

app.listen(port, () => {
  console.log(`LetDiv app listening on port ${port}`)
});