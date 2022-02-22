import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render, unmountComponentAtNode } from 'react-dom';

import React from 'react';
import User from './User';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

let container = null;
const location = window.location;
let confirmSpy;

const user = {
  id: 1,
  name: 'eduardo',
  cpf: '000.000.000-00',
  first_dose_vaccine: 'Pfizer',
  first_dose_date: '01/07/2021',
  second_dose_vaccine: 'Pfizer',
  second_dose_date: '02/10/2021',
  third_dose_vaccine: 'Pfizer',
  third_dose_date: '05/01/2022',
};

beforeEach(() => {
  // configurar o elemento do DOM como o alvo da renderização
  const tableBody = document.createElement('tbody');
  container = document.body.appendChild(tableBody);
  confirmSpy = jest.spyOn(window, 'confirm');
  confirmSpy.mockImplementation(jest.fn(() => true));
});

afterEach(() => {
  // Limpar ao sair
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

beforeAll(() => {
  confirmSpy = jest.spyOn(window, 'confirm');
  confirmSpy.mockImplementation(jest.fn(() => true));
});

afterAll(() => confirmSpy.mockRestore());

describe('Testes do componente User', () => {
  test('testa renderização do componente', () => {
    act(() => {
      render(
        <BrowserRouter>
          <User user={user} />
        </BrowserRouter>,

        container
      );
    });

    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<tr><td>eduardo</td><td>000.000.000-00</td><td>Pfizer</td><td>01/07/2021</td><td>Pfizer</td><td>02/10/2021</td><td>Pfizer</td><td>05/01/2022</td><td class=\\"actions\\"><a data-testid=\\"edit-link\\" class=\\"edit\\" href=\\"/edicao/1\\"><svg>edit.svg</svg></a><button data-testid=\\"delete-button\\" class=\\"delete\\"><svg>delete.svg</svg></button></td></tr>"`
    );
  });

  test('testa link de edição', () => {
    act(() => {
      render(
        <BrowserRouter>
          <User user={user} />
        </BrowserRouter>,

        container
      );
    });

    const link = screen.getAllByTestId('edit-link')[0];
    expect(link).toBeInTheDocument();
    userEvent.click(link);
    expect(location.href).toBe('http://localhost/edicao/1');
  });

  test('testa botão de deleção', () => {
    act(() => {
      render(
        <BrowserRouter>
          <User user={user} />
        </BrowserRouter>,

        container
      );
    });

    const button = screen.getAllByTestId('delete-button')[0];
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    expect(window.confirm).toBeCalled();
  });
});
