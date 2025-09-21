export const byewindData = {
  user: {
    name: "Abhilash Joseph",
    email: "abhilash@byewind.com",
    avatar: "AJ",
    initials: "AJ"
  },
  
  metrics: {
    customers: {
      value: "3,781",
      change: "+11.01%",
      trending: "up"
    },
    orders: {
      value: "1,219",
      change: "-0.03%",
      trending: "down"
    },
    revenue: {
      value: "$695",
      change: "+15.03%",
      trending: "up"
    },
    growth: {
      value: "30.1%",
      change: "+6.08%",
      trending: "up"
    }
  },
  
  projectionsVsActuals: {
    data: [
      { month: 'Jan', actual: 12, projection: 15 },
      { month: 'Feb', actual: 19, projection: 18 },
      { month: 'Mar', actual: 17, projection: 20 },
      { month: 'Apr', actual: 22, projection: 25 },
      { month: 'May', actual: 15, projection: 18 },
      { month: 'Jun', actual: 25, projection: 22 }
    ]    
  },
  
  revenue: {
    currentWeek: "$58,211",
    previousWeek: "$68,768",
    data: [
      { month: 'Jan', current: 12, previous: 8 },
      { month: 'Feb', current: 8, previous: 15 },
      { month: 'Mar', current: 15, previous: 12 },
      { month: 'Apr', current: 18, previous: 20 },
      { month: 'May', current: 22, previous: 18 },
      { month: 'Jun', current: 25, previous: 22 }
    ]
  },
  
  revenueByLocation: [
    { location: "New York", value: 72, amount: "$72K" },
    { location: "San Francisco", value: 39, amount: "$39K" },
    { location: "Sydney", value: 25, amount: "$25K" },
    { location: "Singapore", value: 61, amount: "$61K" }
  ],
  
  topSellingProducts: [
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18"
    },
    {
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: 37,
      amount: "$4,754.50"
    },
    {
      name: "Half Sleeve Shirt",
      price: "$39.99",
      quantity: 64,
      amount: "$2,559.36"
    },
    {
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: 184,
      amount: "$3,680.00"
    },
    {
      name: "Marco Shoes",
      price: "$79.49",
      quantity: 64,
      amount: "$1,965.81"
    }
  ],
  
  revenueBreakdown: {
    direct: { value: 300.56, percentage: 38.6 },
    affiliate: { value: 135.18, percentage: 17.4 },
    sponsored: { value: 154.02, percentage: 19.8 },
    email: { value: 48.96, percentage: 6.3 }
  },
  
  orders: [
    {
      id: "#CM9801",
      user: { name: "Natali Craig", avatar: "NC" },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress"
    },
    {
      id: "#CM9802",
      user: { name: "Kate Morrison", avatar: "KM" },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete"
    },
    {
      id: "#CM9803",
      user: { name: "Drew Cano", avatar: "DC" },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending"
    },
    {
      id: "#CM9804",
      user: { name: "Orlando Diggs", avatar: "OD" },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved"
    },
    {
      id: "#CM9805",
      user: { name: "Andi Lane", avatar: "AL" },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected"
    },
    {
      id: "#CM9801",
      user: { name: "Natali Craig", avatar: "NC" },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress"
    },
    {
      id: "#CM9802",
      user: { name: "Kate Morrison", avatar: "KM" },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete"
    },
    {
      id: "#CM9803",
      user: { name: "Drew Cano", avatar: "DC" },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending"
    },
    {
      id: "#CM9804",
      user: { name: "Orlando Diggs", avatar: "OD" },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved"
    },
    {
      id: "#CM9805",
      user: { name: "Andi Lane", avatar: "AL" },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected"
    }
  ],
  
  notifications: [
    {
      id: 1,
      message: "You have a bug that needs...",
      time: "Just now",
      type: "bug"
    },
    {
      id: 2,
      message: "New user registered",
      time: "59 minutes ago",
      type: "user"
    },
    {
      id: 3,
      message: "You have a bug that needs...",
      time: "12 hours ago",
      type: "bug"
    },
    {
      id: 4,
      message: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
      type: "subscription"
    }
  ],
  
  activities: [
    {
      id: 1,
      message: "You have a bug that needs...",
      time: "Just now",
      user: { name: "User", avatar: "U" }
    },
    {
      id: 2,
      message: "Released a new version",
      time: "59 minutes ago",
      user: { name: "Admin", avatar: "A" }
    },
    {
      id: 3,
      message: "Submitted a bug",
      time: "12 hours ago",
      user: { name: "User", avatar: "U" }
    },
    {
      id: 4,
      message: "Modified a data in Page X",
      time: "Today, 11:59 AM",
      user: { name: "Admin", avatar: "A" }
    },
    {
      id: 5,
      message: "Deleted a page in Project X",
      time: "Feb 2, 2023",
      user: { name: "User", avatar: "U" }
    }
  ],
  
  contacts: [
    { name: "Natali Craig", avatar: "NC" },
    { name: "Drew Cano", avatar: "DC" },
    { name: "Orlando Diggs", avatar: "OD" },
    { name: "Andi Lane", avatar: "AL" },
    { name: "Kate Morrison", avatar: "KM" },
    { name: "Koray Okumus", avatar: "KO" }
  ],
  
  navigation: [
    { name: "Overview", active: false },
    { name: "eCommerce", active: true },
    { name: "Projects", active: false },
    { name: "Online Courses", active: false }
  ]
}