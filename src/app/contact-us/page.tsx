

import { Clock8Icon, MapPinIcon, MailIcon, PhoneIcon } from 'lucide-react'

import ContactUs from '@/components/blocks/contact-us/contact-us'

const contactInfo = [
  {
    title: 'Office Hours',
    icon: Clock8Icon,
    description: 'Monday-Friday\n8:00 am to 5:00 pm'
  },
  {
    title: 'Our Location',
    icon: MapPinIcon,
    description: 'Nairobi, Kenya\nEast Africa'
  },
  {
    title: 'Email',
    icon: MailIcon,
    description: 'cliffordmanase8@gmail.com\nwork@clifford.dev'
  },
  {
    title: 'Get in Touch',
    icon: PhoneIcon,
    description: '+254 723 937 043'
  }
]

const ContactUsPage = () => {
  return <ContactUs contactInfo={contactInfo} />
}

export default ContactUsPage