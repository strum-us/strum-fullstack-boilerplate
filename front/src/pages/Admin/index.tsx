// import React, { useEffect, useState } from 'react'

// import { Projects } from './projects'
// import { Users } from './users'

// enum Tab {
//   user,
//   project
// }

// export function Admin() {
//   const [tab, setTab] = useState(Tab.user)
//   return (
//     <div className='flex flex-row bg-white spa'>
//       {/* header */}
//       <div className='flex flex-col w-32 h-full m-2'>
//         <div className='p-2 mt-4 mb-2 font-semibold'>Quda</div>
//         <div className='p-2 select-none hover:bg-gray-200' onClick={() => setTab(Tab.user)}>User</div>
//         <div className='p-2 select-none hover:bg-gray-200' onClick={() => setTab(Tab.project)}>Project</div>
//       </div>

//       { tab === Tab.user ? <Users/> : <></> }
//       { tab === Tab.project ? <Projects/> : <></> }
//     </div>
//   )
// }
