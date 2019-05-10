import '../common/normalize.css'
import '../common/rem.css'
import '../common/atom.min.css'
import '../common/global.css'
import '../common/material_icons.css'

import React from 'react'
import App, { Container } from 'next/app'

import FreeHead from '../layouts/freehead'
import Header from '../layouts/header'
import Footer from '../layouts/footer'

global.fetch = require('node-fetch');

class Layout extends React.Component {
      render() {
            const { children } = this.props
            return (
                  <div className='layout'>
                        <FreeHead></FreeHead>
                        <Header></Header>
                        {children}
                        <Footer></Footer>
                  </div>
            )
      }
}

export default class MyApp extends App {
      render() {
            const { Component, pageProps } = this.props
            return <Container>
                  <Layout>
                        <Component {...pageProps} />
                  </Layout>
            </Container>
      }
}