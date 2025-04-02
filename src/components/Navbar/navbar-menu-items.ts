export interface NavMenuItem {
    id:number,
    title:string,
    path:string
}
const navMenuItems:NavMenuItem[] = [
    {
        id:1,
        title: 'Home',
        path: '/'
    },
    {
        id:2,
        title: 'Events',
        path: '/events'
    },
    {
        id:3,
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        id:4,
        title: 'About Us',
        path: '/about-us'
    },
    {
        id:5,
        title: 'New Event',
        path: '/new-event'
    }
]
export default navMenuItems