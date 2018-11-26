import React from 'react'
import { render } from 'react-testing-library'

import Slider from '../Slider'

describe('<Slider />', () => {
  test('Renders children properly', () => {
    const { getByTestId } = render(
      <Slider data-testid="slider">
        <div data-testid="slide1">Slide 1</div>
        <div data-testid="slide2">Slide 2</div>
        <div data-testid="slide3">Slide 3</div>
      </Slider>
    )

    const slider = getByTestId('slider')
    const slide1 = getByTestId('slide1')
    const slide2 = getByTestId('slide2')
    const slide3 = getByTestId('slide3')

    expect(slider).toHaveTextContent('Slide 1Slide 2Slide 3')
    expect(slide1).toBeVisible()
    expect(slide2).not.toBeVisible()
    expect(slide3).not.toBeVisible()
  })
})
