import React from 'react'
import { render, waitFor } from '@testing-library/react'

import Slider from './Slider'

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

  test('Updates when `activeSlide` prop changes', () => {
    const { getByTestId, rerender } = render(
      <Slider data-testid="slider" activeSlide={0}>
        <div data-testid="slide1">Slide 1</div>
        <div data-testid="slide2">Slide 2</div>
      </Slider>
    )

    const slider = getByTestId('slider')
    const slide1 = getByTestId('slide1')
    const slide2 = getByTestId('slide2')

    expect(slider).toHaveTextContent('Slide 1Slide 2')
    expect(slide1).toBeVisible()
    expect(slide2).not.toBeVisible()

    rerender(
      <Slider data-testid="slider" activeSlide={1}>
        <div data-testid="slide1">Slide 1</div>
        <div data-testid="slide2">Slide 2</div>
      </Slider>
    )

    expect(slider).toHaveTextContent('Slide 1Slide 2')
    expect(slide1).not.toBeVisible()
    expect(slide2).toBeVisible()
  })

  test('Calls callbacks properly', async () => {
    const mockCallback = jest.fn()

    const { rerender } = render(
      <Slider data-testid="slider" activeSlide={0} changeSlideCallback={mockCallback}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Slider>
    )

    rerender(
      <Slider data-testid="slider" activeSlide={1} changeSlideCallback={mockCallback}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Slider>
    )

    await waitFor(() => {
      expect(mockCallback).toBeCalledTimes(1)
      expect(mockCallback.mock.calls.length).toBe(1)
      expect(mockCallback.mock.calls[0][0]).toBe(1)
    })

    rerender(
      <Slider data-testid="slider" activeSlide={2} changeSlideCallback={mockCallback}>
        <div data-testid="slide1">Slide 1</div>
        <div data-testid="slide2">Slide 2</div>
      </Slider>
    )

    await waitFor(() => {
      expect(mockCallback).toBeCalledTimes(2)
      expect(mockCallback.mock.calls.length).toBe(2)
      expect(mockCallback.mock.calls[1][0]).toBe(2)
    })
  })

  test('Can be aligned in three ways', () => {
    const { getByTestId } = render(
      <>
        <Slider data-testid="slider-center">
          <div>Slide</div>
        </Slider>
        <Slider data-testid="slider-top" alignTop>
          <div>Slide</div>
        </Slider>
        <Slider data-testid="slider-bottom" alignBottom>
          <div>Slide</div>
        </Slider>
      </>
    )

    const alignCenterSlider = getByTestId('slider-center')
    const alignTopSlider = getByTestId('slider-top')
    const alignBottomSlider = getByTestId('slider-bottom')

    expect(alignCenterSlider).toHaveStyle('align-items: center;')
    expect(alignTopSlider).toHaveStyle('align-items: flex-start;')
    expect(alignBottomSlider).toHaveStyle('align-items: flex-end;')
  })
})
