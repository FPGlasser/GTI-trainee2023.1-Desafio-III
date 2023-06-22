import React, { useState } from 'react'
import { Section, Flex, BoxShadow } from '..'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0)

  return (
    <Section>
      <Flex $justify='center' $align='center'>
        <BoxShadow>
          
        </BoxShadow>
      </Flex>
    </Section>

  )
}

export default Testimonials