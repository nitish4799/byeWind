const Contacts = ({ contacts }) => {
  return (
    <div>
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">Contacts</h3>
      
      <div className="space-y-2">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-xs">{contact.avatar}</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{contact.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contacts
