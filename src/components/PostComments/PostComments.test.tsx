import { fireEvent, render, screen } from '@testing-library/react'
import PostComments from './index'

describe('PostComments', () => {
  test('deve inserir dois comentários', () => {
    render(<PostComments />)

    const nameInput = screen.getByTestId('name-input')
    const messageInput = screen.getByTestId('message-input')
    const submitButton = screen.getByTestId('submit-button')

    fireEvent.change(nameInput, {
      target: { value: 'Gustavo' }
    })
    fireEvent.change(messageInput, {
      target: { value: 'Primeiro comentário' }
    })
    fireEvent.click(submitButton)

    fireEvent.change(nameInput, {
      target: { value: 'Maria' }
    })
    fireEvent.change(messageInput, {
      target: { value: 'Segundo comentário' }
    })
    fireEvent.click(submitButton)

    expect(screen.getAllByTestId('comment-item')).toHaveLength(2)
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument()
  })
})