import './footer.less'

function Footer() {
    return (
        <footer className="footer_wrap flex w_100 border_box justify_center">
            <div className="footer flex w_100 border_box justify_center">
                <div className="statement flex flex_column align_center">
                    <span className="text mb_10">Copyright © 2019 testone. All Rights Reserved.</span>
                    <span className="text">testone 版权所有</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer