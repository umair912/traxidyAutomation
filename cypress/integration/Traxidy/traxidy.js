/// <reference types="cypress" />

import Traxidy from '../../support/Pages/traxidyPOM'

const tr = new Traxidy();

describe('Traxidy Test Cases', () => {

    it('traxidy new project', () => {  
      tr.visit()
      tr.login()
      tr.newproject()
      tr.newProjectinfo()
      // tr.export()
    })
  })
