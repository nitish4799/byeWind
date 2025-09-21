import { useState } from 'react';
import {
  ShoppingCart,
  Folder,
  BookOpen,
  User,
  Settings,
  MessageSquare,
  Users,
  BarChart3,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import clsx from 'clsx';

const Sidebar = ({ activeTab, onTabChange, isOpen, onClose, navigation, user }) => {
  const [activeSection, setActiveSection] = useState('eCommerce');
  const [expandedSections, setExpandedSections] = useState({
    userProfile: true, 
  });

  const dashboardItems = [
    { name: 'Default', icon: BarChart3, key: 'default' },
    { name: 'eCommerce', icon: ShoppingCart, key: 'eCommerce' },
    { name: 'Projects', icon: Folder, key: 'projects' },
    { name: 'Online Courses', icon: BookOpen, key: 'courses' },
  ];

  const pageItems = [
    {
      name: 'User Profile',
      icon: User,
      key: 'profile',
      expandable: true,
      children: [
        { name: 'Overview', key: 'profile-overview' },
        { name: 'Projects', key: 'profile-projects' },
        { name: 'Campaigns', key: 'profile-campaigns' },
        { name: 'Documents', key: 'profile-documents' },
        { name: 'Followers', key: 'profile-followers' },
      ],
    },
    { name: 'Account', icon: Settings, key: 'account' },
    { name: 'Corporate', icon: BarChart3, key: 'corporate' },
    { name: 'Blog', icon: MessageSquare, key: 'blog' },
    { name: 'Social', icon: Users, key: 'social' },
  ];

  const toggleSection = (key) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={clsx(
          'fixed left-0 top-0 w-64 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-600 z-50 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        {/* Logo and User Section */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white dark:text-black" />
            </div>
            <span className="text-xl font-medium text-gray-900 dark:text-white">ByeWind</span>
          </div>

          {/* Favorites and Recently tabs */}
          <div className="flex items-center space-x-6 mb-4">
            <button className="text-sm font-medium text-gray-900 dark:text-white">Favorites</button>
            <button className="text-sm text-gray-500 dark:text-gray-400">Recently</button>
          </div>

          {/* Navigation items without headers */}
          <div className="space-y-1 mb-6">
            <button className="w-full flex items-center space-x-3 px-0 py-1.5 text-left text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <span className="text-sm">Overview</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-0 py-1.5 text-left text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <span className="text-sm">Projects</span>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="px-4 py-4 space-y-6">
          {/* Dashboards Section */}
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Dashboard</div>
            <div className="space-y-1">
              {dashboardItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.key === activeSection;

                return (
                  <button
                    key={item.key}
                    onClick={() => {
                      setActiveSection(item.key);
                    }}
                    className={clsx(
                      'w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200',
                      isActive
                        ? 'bg-gray-50 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900',
                    )}
                  >
                    <Icon
                      className={clsx('w-4 h-4', isActive ? 'text-gray-600 dark:text-gray-400' : 'text-gray-500 dark:text-gray-400')}
                    />
                    <span className="text-sm font-medium">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="px-2 mb-3 text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">Pages</h3>
            <div className="space-y-1">
              {pageItems.map((item) => {
                const Icon = item.icon;
                const isExpanded = expandedSections[item.key] || expandedSections.userProfile;

                return (
                  <div key={item.key}>
                    <button
                      onClick={() => {
                        if (item.expandable) {
                          toggleSection(item.key);
                        } else {
                          setActiveSection(item.key);
                          onTabChange && onTabChange(item.key);
                        }
                      }}
                      className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900"
                    >
                      <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm font-medium flex-1">{item.name}</span>
                      {item.expandable && (
                        <ChevronRight
                          className={clsx('w-4 h-4 text-gray-400 transition-transform duration-200', isExpanded && 'transform rotate-90')}
                        />
                      )}
                    </button>

                    {/* Expanded children */}
                    {item.expandable && item.children && isExpanded && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <button
                            key={child.key}
                            onClick={() => {
                              setActiveSection(child.key);
                              onTabChange && onTabChange(child.key);
                            }}
                            className="w-full flex items-start px-3 py-1.5 text-left text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                          >
                            {child.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
