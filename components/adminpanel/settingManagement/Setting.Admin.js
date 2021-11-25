import React from 'react'
import { connect } from 'react-redux';
import { getSetting , AddSetting } from "../../../actions/Setting.Action";

export const SettingAdmin = ({ getSetting , AddSetting , settingState , match }) => {
    const { setting } = settingState;
    useEffect( () => {
        const id = match.params.id;
        getSetting(id);
    },[]);

    return (
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-body">
                    {/* Basic form layout section start */}
                    <section id="configuration">
                        <div className="row">
                            <div className="col-12">
                                <div className="card px-lg-4 px-2 user-management jost pad-20">
                                    <div className="card-content collapse show">
                                        <div className="card-body user-subs table-responsive card-dashboard">
                                            <h2 className="d-blue chart-heading mt-2">SETTINGS</h2>
                                            <div className="clearfix" />
                                            <div className="grey-div px-md-5 py-md-3 px-2 py-2 my-3 pb-70">
                                                <h4 className="bold d-blue">DISPOSE</h4>
                                                <div className="py-1 border-b">
                                                    <h6 className="subH d-inline-block minwidth">Commission Fee</h6><input type="text" name id className="site-input" defaultValue="10%" />
                                                </div>
                                                <div className="py-1">
                                                    <h6 className="subH d-inline-block minwidth">Job Type</h6><h6 className="lg-grey d-inline-block subH"> Dispose</h6>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-12">
                                                        <a href="view-dispose.html"><button>UPDATE</button></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* // Basic form layout section end */}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    settingState: state.settingReducer
});

export default connect(mapStateToProps, { getSetting , AddSetting })(SettingAdmin)
