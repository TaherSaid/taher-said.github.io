import Link from 'next/link'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">
              {portfolioData.name}
            </h3>
            <p className="text-gray-600 text-sm">
              Full Stack Developer passionate about creating innovative web solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Projects
                </Link>
              </li>
              {/* <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">
              Contact
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{portfolioData.contact.email}</span>
              </a>
              <a
                href={`tel:${portfolioData.contact.phone}`}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{portfolioData.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {currentYear} {portfolioData.name}. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
