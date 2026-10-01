import { useState } from 'react'
import { motion } from 'motion/react'
import { profile } from '../../data/profile'
import { useReveal } from '../../hooks/useReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Input, Textarea } from '../ui/Input'

export function Contact() {
  const { ref, visible } = useReveal()

  return (
    <section id="contact" className="section-pad relative" role="region" aria-labelledby="contact-heading">
      <div className="shell">
        <SectionHeading
          id="contact-heading"
          kicker="Get In Touch"
          title="Contact & Collaboration"
          subtitle="Interested in working together or discussing potential opportunities? Feel free to reach out."
        />

        <motion.div
          ref={ref}
          className="grid lg:grid-cols-12 gap-8 mt-12 items-start"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Contact Details Card */}
          <div className="lg:col-span-5">
            <Card elevation="flat" className="p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-medium text-ink mb-6">Direct Information</h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-paper border border-line flex items-center justify-center text-ink-muted flex-shrink-0 mt-0.5">
                      <Icon name="mail" size={16} />
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-ink-faint">Email</span>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-sm text-ink hover:text-primary transition-colors link-underline"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-paper border border-line flex items-center justify-center text-ink-muted flex-shrink-0 mt-0.5">
                      <Icon name="github" size={16} />
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-ink-faint">Social Profiles</span>
                      <div className="flex items-center gap-4 mt-1">
                        {profile.socials.map((social) => (
                          <a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-ink-muted hover:text-ink transition-colors link-underline"
                          >
                            {social.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-paper border border-line flex items-center justify-center text-ink-muted flex-shrink-0 mt-0.5">
                      <Icon name="check" size={16} />
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-ink-faint">Location</span>
                      <span className="text-sm text-ink font-normal">{profile.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-line">
                <a
                  href={profile.resumeUrl}
                  download
                  className="btn-outline w-full justify-center"
                >
                  <Icon name="mail" size={16} />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <Card elevation="flat" className="p-6 sm:p-8">
              <h3 className="text-lg font-medium text-ink mb-6">Send a Message</h3>
              <ContactForm />
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')
    await new Promise((r) => setTimeout(r, 600))
    setFormState('success')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setFormState('idle'), 4000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <Input
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Narendra"
          required
        />
        <Input
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="name@example.com"
          required
        />
      </div>

      <Textarea
        label="Message"
        name="message"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        placeholder="Write your message here..."
        required
      />

      <div className="flex items-center gap-4 pt-2">
        <Button
          type="submit"
          loading={formState === 'submitting'}
          disabled={formState === 'submitting'}
        >
          {formState === 'success' ? 'Message Sent' : 'Send Message'}
        </Button>

        {formState === 'success' && (
          <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400" role="status">
            Thank you! Your message was sent.
          </p>
        )}
      </div>
    </form>
  )
}