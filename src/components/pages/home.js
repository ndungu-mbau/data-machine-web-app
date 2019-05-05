import React, { Component } from 'react'
import Sidebar from "../layouts/sidebar"



export default class Home extends Component {
    render() {
        return (
            <div className="k-grid k-grid--hor k-grid--root">
                <div className="k-grid__item k-grid__item--fluid k-grid k-grid--ver k-page">
                    <button id="k_aside_close_btn" class="k-aside-close"><i class="la la-close"></i></button>
                    <Sidebar></Sidebar>
                </div>
            </div>
        );
    }
}