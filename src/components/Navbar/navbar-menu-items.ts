export interface NavMenuItem {
    title:string,
    path:string
}
const navMenuItems:NavMenuItem[] = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Events',
        path: '/events'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        title: 'About Us',
        path: '/about-us'
    },
]
export default navMenuItems