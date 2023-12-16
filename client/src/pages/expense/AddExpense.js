import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moneySVG from "../../img/gg.svg";
import { createExpAction } from "../../redux/slices/expenses/expensesSlices";
import DisabledButton from "../../components/DisabledButton";
import ErrorDisplayMessage from "../../components/ErrorDisplayMessage";

//form validations
const formSchema = Yup.object({
  title: Yup.string().required("Blood Group is required"),
  description: Yup.string().required("Age: is required"),
  amount: Yup.number().required("Amount is required"),
});

const AddExpense = props => {
  const history = useHistory();
  //dispatch
  const dispatch = useDispatch();
  //formik form
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      amount: "",
    },
    onSubmit: values => {
      dispatch(createExpAction(values));
    },
    validationSchema: formSchema,
  });

  //Get expense created from store
  const state = useSelector(state => state.expenses);
  const { loading, appErr, serverErr, expenseCreated, isExpCreated } = state;

  //Redirect
  useEffect(() => {
    if (isExpCreated) history.push("/expenses");
  }, [isExpCreated, dispatch]);
  return (
    <>
      <section className="py-5 bg-danger vh-100">
        <div className="container text-center">
          <a className="d-inline-block mb-5">
            <img
              className="img-fluid"
              src={moneySVG}
              alt="SVGeXPENSES"
              width="200"
            />
          </a>
          <div className="row mb-4">
            <div className="col-12 col-md-8 col-lg-5 mx-auto">
              <div className="p-4 shadow-sm rounded bg-white">
                <form onSubmit={formik.handleSubmit}>
                  <span className="text-muted">Donor</span>
                  <h2 className="mb-4 fw-light">Record New Donor</h2>
                  {/* Display income Err */}
                  {serverErr || appErr ? (
                    <ErrorDisplayMessage>
                      {serverErr} {appErr}
                    </ErrorDisplayMessage>
                  ) : null}

                  <div className="mb-3 input-group">
                    <input
                      value={formik.values.title}
                      onChange={formik.handleChange("title")}
                      onBlur={formik.handleBlur("title")}
                      className="form-control"
                      type="text"
                      placeholder="Enter Blood Group"
                    />
                  </div>
                  {/* Err */}
                  <div className="text-danger mb-2">
                    {formik.touched.title && formik.errors.title}
                  </div>
                  <div className="mb-3 input-group">
                    <input
                      value={formik.values.description}
                      onChange={formik.handleChange("description")}
                      onBlur={formik.handleBlur("description")}
                      className="form-control"
                      type="text"
                      placeholder="Enter Age"
                    />
                  </div>
                  {/* Err */}
                  <div className="text-danger mb-2">
                    {formik.touched.description && formik.errors.description}
                  </div>
                  <div className="mb-3 input-group">
                    <input
                      value={formik.values.amount}
                      onChange={formik.handleChange("amount")}
                      onBlur={formik.handleBlur("amount")}
                      className="form-control"
                      type="number"
                      placeholder="Enter Amount"
                    />
                  </div>
                  {/* Err */}
                  <div className="text-danger mb-2">
                    {formik.touched.amount && formik.errors.amount}
                  </div>
                  {loading ? (
                    <DisabledButton />
                  ) : (
                    <button type="submit" className="btn btn-danger mb-4 w-100">
                      Record Donor
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddExpense;
