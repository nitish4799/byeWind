export const sampleData = {
  user: {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    initials: "JD",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },

  navigation: {
    main: [
      {
        title: "Overview",
        icon: "📊",
        active: false
      },
      {
        title: "Projects",
        icon: "📁",
        active: false
      },
      {
        title: "Dashboards",
        icon: "📈",
        active: true,
        submenu: [
          {
            title: "Default",
            active: true
          },
          {
            title: "Analytics",
            active: false
          }
        ]
      },
      {
        title: "eCommerce",
        icon: "🛒",
        active: true,
        submenu: [
          {
            title: "Products",
            active: false
          },
          {
            title: "Orders",
            active: false
          }
        ]
      },
      {
        title: "Projects",
        icon: "📋",
        active: false
      },
      {
        title: "Online Courses",
        icon: "🎓",
        active: false
      }
    ],
    pages: [
      {
        title: "User Profile",
        icon: "👤",
        submenu: [
          { title: "Overview" },
          { title: "Projects" },
          { title: "Campaigns" },
          { title: "Documents" },
          { title: "Followers" }
        ]
      },
      {
        title: "Account",
        icon: "⚙️"
      },
      {
        title: "Corporate",
        icon: "🏢"
      },
      {
        title: "Blog",
        icon: "📝"
      },
      {
        title: "Social",
        icon: "👥"
      }
    ]
  },

  overviewStats: [
    {
      id: 1,
      title: "Customers",
      value: "3,781",
      change: "+11.01%",
      changeType: "positive",
      icon: "👥"
    },
    {
      id: 2,
      title: "Orders",
      value: "1,219",
      change: "-0.03%",
      changeType: "negative",
      icon: "📦"
    },
    {
      id: 3,
      title: "Revenue",
      value: "$695",
      change: "+15.03%",
      changeType: "positive",
      icon: "💰"
    },
    {
      id: 4,
      title: "Growth",
      value: "30.1%",
      change: "+6.08%",
      changeType: "positive",
      icon: "📈"
    }
  ],

  revenueData: {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    currentWeekData: [25000, 32000, 28000, 45000, 38000, 42000],
    previousWeekData: [22000, 30000, 35000, 40000, 35000, 40000],
    projectionsData: [18000, 25000, 22000, 35000, 30000, 32000],
    actualsData: [16000, 20000, 17000, 22000, 15000, 20000]
  },

  notifications: [
    {
      id: 1,
      message: "You have a bug that needs to be fixed",
      time: "Just now"
    },
    {
      id: 2,
      message: "New user registered",
      time: "59 minutes ago"
    },
    {
      id: 3,
      message: "You have a bug that needs to be fixed",
      time: "12 hours ago"
    },
    {
      id: 4,
      message: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM"
    }
  ],

  activities: [
    {
      id: 1,
      message: "You have a bug that needs to be fixed",
      time: "Just now"
    },
    {
      id: 2,
      message: "Released a new version",
      time: "59 minutes ago"
    },
    {
      id: 3,
      message: "Submitted a bug",
      time: "12 hours ago"
    },
    {
      id: 4,
      message: "Modified A data in Page X",
      time: "Today, 11:59 AM"
    },
    {
      id: 5,
      message: "Deleted a page in Project X",
      time: "Feb 2, 2023"
    }
  ],

  revenueByLocation: [
    {
      id: 1,
      location: "New York",
      revenue: "72K",
      percentage: 35
    },
    {
      id: 2,
      location: "San Francisco",
      revenue: "39K",
      percentage: 19
    },
    {
      id: 3,
      location: "Sydney",
      revenue: "25K",
      percentage: 12
    },
    {
      id: 4,
      location: "Singapore",
      revenue: "61K",
      percentage: 30
    }
  ],

  contacts: [
    {
      id: 1,
      name: "Natali Craig",
      role: "Marketing Manager"
    },
    {
      id: 2,
      name: "Drew Cano",
      role: "Developer"
    },
    {
      id: 3,
      name: "Orlando Diggs",
      role: "Designer"
    },
    {
      id: 4,
      name: "Andi Lane",
      role: "Product Manager"
    },
    {
      id: 5,
      name: "Kate Morrison",
      role: "Sales Director"
    },
    {
      id: 6,
      name: "Koray Okumus",
      role: "CTO"
    }
  ],

  topSellingProducts: [
    {
      id: 1,
      name: "ASOS Ridley High Waist",
      price: 79.49,
      quantity: 82,
      amount: 6518.18
    },
    {
      id: 2,
      name: "Marco Lightweight Shirt",
      price: 128.50,
      quantity: 37,
      amount: 4754.50
    },
    {
      id: 3,
      name: "Half Sleeve Shirt",
      price: 39.99,
      quantity: 64,
      amount: 2559.36
    },
    {
      id: 4,
      name: "Lightweight Jacket",
      price: 20.00,
      quantity: 184,
      amount: 3680.00
    },
    {
      id: 5,
      name: "Marco Shoes",
      price: 79.49,
      quantity: 64,
      amount: 1965.81
    }
  ],

  salesDistribution: [
    {
      id: 1,
      channel: "Direct",
      amount: 300.56,
      percentage: 38.6,
      color: "bg-green-600"
    },
    {
      id: 2,
      channel: "Affiliate",
      amount: 135.18,
      percentage: 17.4,
      color: "bg-green-400"
    },
    {
      id: 3,
      channel: "Sponsored",
      amount: 154.02,
      percentage: 19.8,
      color: "bg-purple-500"
    },
    {
      id: 4,
      channel: "E-mail",
      amount: 48.96,
      percentage: 6.3,
      color: "bg-blue-400"
    }
  ],

  orders: [
    {
      id: 1,
      customer: "John Doe",
      product: "ASOS Ridley High Waist",
      amount: 79.49,
      status: "completed",
      date: "2024-01-15",
      statusColor: "green"
    },
    {
      id: 2,
      customer: "Jane Smith",
      product: "Marco Lightweight Shirt",
      amount: 128.50,
      status: "pending",
      date: "2024-01-14",
      statusColor: "yellow"
    },
    {
      id: 3,
      customer: "Bob Johnson",
      product: "Half Sleeve Shirt",
      amount: 39.99,
      status: "cancelled",
      date: "2024-01-13",
      statusColor: "red"
    }
  ]
};