import {
  fetchCategories,
  fetchCountries,
  fetchCurrencies,
  fetchRequiredDocs,
  fetchTypesOfWork,
} from "@/redux/slices/listSlices";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { generateSlug } from "../utils/slug";
import { useGetAd } from "./useGetAd";
import useAxios from "./useAxios";

export const useAdsForm = () => {
  const [selected, setSelected] = useState([]);
  const [bannerUrl, setBannerUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormReady, setIsFormReady] = useState(false);
  const navigate = useNavigate();
  const { slug } = useParams();
  const isEditMode = Boolean(slug);

  const { ad: adData, loading: isAdLoading } = useGetAd(slug);

  const dispatch = useDispatch();
  const {
    countryList,
    typeOfWorkList,
    categoryList,
    currencyList,
    requiredDocs,
  } = useSelector((state) => state.lists);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: "",
      currency: "",
      typeOfWork: "",
      renewable: false,
      terms: false,
      requiredDocument: [],
    },
  });

  const paymentType = watch("paymentType");
  const showInputs = paymentType === "advanceAfterBefore";
  const showInputs2 = paymentType === "AfterBefore";

  const title = watch("title");
  const totalPrice = watch("basePrice");
  const commType = watch("commisionType");
  const commValueCustomer = watch("commisionValueForCustomer");
  const commValueAgent = watch("commisionValueForAgent");
  const customerPayableWithCM = watch("customerPayableWithCM");
  const agentPayableWithCM = watch("agentPayableWithCM");

  const advancePaymentAmount = watch("advancePayment.amount");
  const afterVisaPaymentAmount = watch("afterVisaPayment.amount");
  const beforeFlightPaymentAmount = watch("beforeFlightPayment.amount");

  const afterVisaOnlyAmount = watch("afterVisaOnly.amount");
  const beforeFlightOnlyAmount = watch("beforeFlightOnly.amount");

  useEffect(() => {
    if (isFormReady && isEditMode && adData) {
      const countryObj = countryList.find(
        (c) => c._id === adData.country?._id || c.name === adData.country
      );
      const workTypeObj = typeOfWorkList.find(
        (w) => w.workTypeName === adData.typeOfWork
      );
      const currencyObj = currencyList.find(
        (c) => c.symbol === adData.currency || c.code === adData.currency
      );

      let categoryIdToSet = null;
      if (Array.isArray(adData.category_id) && adData.category_id.length > 0) {
        categoryIdToSet = adData.category_id[0]?._id;
      } else if (adData.category_id?._id) {
        categoryIdToSet = adData.category_id._id;
      } else if (adData.category?._id) {
        categoryIdToSet = adData.category._id;
      }
      const docIds = adData.requiredDocuments
        ? adData.requiredDocuments.map((doc) => doc._id)
        : [];

      const formDefaults = {
        ...adData,
        country: countryObj?._id || "",
        typeOfWork: workTypeObj?._id || "",
        currency: currencyObj?._id || "",
        category_id: categoryIdToSet || "",
        requiredDocument: docIds,
      };

      reset(formDefaults);

      setBannerUrl(adData.banner || "");
      setSelected(adData.gender || []);
    }
  }, [
    isFormReady,
    isEditMode,
    adData,
    reset,
    countryList,
    typeOfWorkList,
    currencyList,
    categoryList,
    requiredDocs,
  ]);

  useEffect(() => {
    const areListsLoaded =
      countryList.length > 0 &&
      typeOfWorkList.length > 0 &&
      currencyList.length > 0 &&
      requiredDocs.length > 0 &&
      categoryList.length > 0;

    if (isEditMode) {
      // For editing, we need the ad data AND the lists
      if (!isAdLoading && adData && areListsLoaded) {
        setIsFormReady(true);
      } else {
        setIsFormReady(false);
      }
    } else {
      // For creating, we only need the lists
      if (areListsLoaded) {
        setIsFormReady(true);
      } else {
        setIsFormReady(false);
      }
    }
  }, [
    isEditMode,
    isAdLoading,
    adData,
    countryList,
    typeOfWorkList,
    currencyList,
    requiredDocs,
    categoryList,
  ]);

  useEffect(() => {
    if (isEditMode && adData && paymentType) {
      const paymentInfo = adData.payments && adData.payments[0];
      if (!paymentInfo || paymentInfo.paymentType !== paymentType) {
        return;
      }

      const paymentBreakdown = paymentInfo[paymentType];
      if (paymentBreakdown) {
        Object.keys(paymentBreakdown).forEach((key) => {
          if (
            paymentBreakdown[key] &&
            typeof paymentBreakdown[key].amount !== "undefined"
          ) {
            setValue(`${key}.amount`, paymentBreakdown[key].amount);
          }
        });
      }
    }
  }, [isEditMode, adData, paymentType, setValue]);

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchTypesOfWork());
    dispatch(fetchCategories());
    dispatch(fetchCurrencies());
    dispatch(fetchRequiredDocs());
  }, [dispatch]);

  const handleChange = (type) => {
    setSelected((prev) =>
      prev.includes(type) ? prev.filter((v) => v !== type) : [...prev, type]
    );
  };

  useEffect(() => {
    if (title) {
      setValue("slug", generateSlug(title));
    }
  }, [title, setValue]);

  useEffect(() => {
    if (!isEditMode && categoryList.length > 0) {
      const workPermitCategory = categoryList.find(
        (item) => item.name.toLowerCase() === "work permit"
      );
      if (workPermitCategory) {
        setValue("category_id", workPermitCategory._id);
        setValue("commisionType", workPermitCategory.commisionType);
        setValue(
          "commisionValueForCustomer",
          workPermitCategory.cmValueCustomer
        );
        setValue("commisionValueForAgent", workPermitCategory.cmValueAgent);
      }
    }
  }, [categoryList, setValue, isEditMode]);

  useEffect(() => {
    if (!totalPrice || !commType || !commValueCustomer || !commValueAgent)
      return;

    let customerTotal = 0;
    let agentTotal = 0;

    if (commType === "flat") {
      customerTotal = Number(totalPrice) + Number(commValueCustomer);
      agentTotal = Number(totalPrice) + Number(commValueAgent);
    } else if (commType === "percentage") {
      const addPercent = (Number(totalPrice) * Number(commValueCustomer)) / 100;
      const addPercentAgent =
        (Number(totalPrice) * Number(commValueAgent)) / 100;
      customerTotal = Number(totalPrice) + addPercent;
      agentTotal = Number(totalPrice) + addPercentAgent;
    }

    setValue("customerPayableWithCM", customerTotal);
    setValue("agentPayableWithCM", agentTotal);
  }, [totalPrice, commType, commValueCustomer, commValueAgent, setValue]);

  useEffect(() => {
    if (showInputs) {
      if (advancePaymentAmount) {
        const customerPayable =
          Number(advancePaymentAmount) + Number(commValueCustomer || 0);
        const agentPayable =
          Number(advancePaymentAmount) + Number(commValueAgent || 0);
        setValue("advancePayment.customerPayable", customerPayable);
        setValue("advancePayment.agentPayable", agentPayable);
      }
      if (afterVisaPaymentAmount) {
        setValue("afterVisaPayment.customerPayable", afterVisaPaymentAmount);
        setValue("afterVisaPayment.agentPayable", afterVisaPaymentAmount);
      }
      if (beforeFlightPaymentAmount) {
        setValue(
          "beforeFlightPayment.customerPayable",
          beforeFlightPaymentAmount
        );
        setValue("beforeFlightPayment.agentPayable", beforeFlightPaymentAmount);
      }

      const total =
        Number(advancePaymentAmount || 0) +
        Number(afterVisaPaymentAmount || 0) +
        Number(beforeFlightPaymentAmount || 0);
      setValue("totalAmount.amount", total);
      setValue("totalAmount.customerPayable", customerPayableWithCM);
      setValue("totalAmount.agentPayable", agentPayableWithCM);
    }

    if (showInputs2) {
      if (afterVisaOnlyAmount) {
        const customerPayable =
          Number(afterVisaOnlyAmount) + Number(commValueCustomer || 0);
        const agentPayable =
          Number(afterVisaOnlyAmount) + Number(commValueAgent || 0);
        setValue("afterVisaOnly.customerPayable", customerPayable);
        setValue("afterVisaOnly.agentPayable", agentPayable);
      }
      if (beforeFlightOnlyAmount) {
        setValue("beforeFlightOnly.customerPayable", beforeFlightOnlyAmount);
        setValue("beforeFlightOnly.agentPayable", beforeFlightOnlyAmount);
      }
      const total =
        Number(afterVisaOnlyAmount || 0) + Number(beforeFlightOnlyAmount || 0);
      setValue("totalOnly.amount", total);
      setValue("totalOnly.customerPayable", customerPayableWithCM);
      setValue("totalOnly.agentPayable", agentPayableWithCM);
    }
  }, [
    showInputs,
    showInputs2,
    advancePaymentAmount,
    afterVisaPaymentAmount,
    beforeFlightPaymentAmount,
    afterVisaOnlyAmount,
    beforeFlightOnlyAmount,
    commValueCustomer,
    commValueAgent,
    customerPayableWithCM,
    agentPayableWithCM,
    setValue,
  ]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    let paymentDetails = {};

    if (paymentType === "advanceAfterBefore") {
      paymentDetails = {
        advancePayment: {
          amount: data.advancePayment?.amount || 0,
          customerPayable:
            Number(data.advancePayment?.amount || 0) +
            Number(commValueCustomer || 0),
          agentPayable:
            Number(data.advancePayment?.amount || 0) +
            Number(commValueAgent || 0),
        },
        afterVisaPayment: {
          amount: data.afterVisaPayment?.amount || 0,
          customerPayable: data.afterVisaPayment?.amount || 0,
          agentPayable: data.afterVisaPayment?.amount || 0,
        },
        beforeFlightPayment: {
          amount: data.beforeFlightPayment?.amount || 0,
          customerPayable: data.beforeFlightPayment?.amount || 0,
          agentPayable: data.beforeFlightPayment?.amount || 0,
        },
        totalAmount: {
          amount: data.totalAmount?.amount || 0,
          customerPayable: Number(data.customerPayableWithCM || 0),
          agentPayable: Number(data.agentPayableWithCM || 0),
        },
      };
    } else if (paymentType === "AfterBefore") {
      paymentDetails = {
        afterVisaOnly: {
          amount: data.afterVisaOnly?.amount || 0,
          customerPayable:
            Number(data.afterVisaOnly?.amount || 0) +
            Number(commValueCustomer || 0),
          agentPayable:
            Number(data.afterVisaOnly?.amount || 0) +
            Number(commValueAgent || 0),
        },
        beforeFlightOnly: {
          amount: data.beforeFlightOnly?.amount || 0,
          customerPayable: data.beforeFlightOnly?.amount || 0,
          agentPayable: data.beforeFlightOnly?.amount || 0,
        },
        totalOnly: {
          amount: data.totalOnly?.amount || 0,
          customerPayable: Number(data.customerPayableWithCM || 0),
          agentPayable: Number(data.agentPayableWithCM || 0),
        },
      };
    }

    const {
      commisionType: _commisionType,
      commisionValue: _commisionValue,
      commisionValueForAgent: _commisionValueForAgent,
      commisionValueForCustomer: _commisionValueForCustomer,
      totalAmount: _totalAmount,
      totalOnly: _totalOnly,
      advancePayment: _advancePayment,
      afterVisaPayment: _afterVisaPayment,
      beforeFlightPayment: _beforeFlightPayment,
      afterVisaOnly: _afterVisaOnly,
      beforeFlightOnly: _beforeFlightOnly,
      ...restOfData
    } = data;

    const formData = {
      ...restOfData,
      banner: bannerUrl,
      gender: selected,
      paymentDetails,
    };

    try {
      if (isEditMode) {
        await useAxios.put(`/ads/${slug}`, formData);
        toast.success("Ad updated successfully!");
        navigate("/agency/ads");
      } else {
        await useAxios.post("/ads/create", formData);
        toast.success("Ad created successfully!");
        reset();
        setBannerUrl("");
        setSelected([]);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          `Failed to ${isEditMode ? "update" : "create"} ad`
      );
      console.error("Error sending data to backend:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    register,
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    showInputs,
    showInputs2,
    selected,
    handleChange,
    bannerUrl,
    setBannerUrl,
    isSubmitting,
    isEditMode,
    isAdLoading,
    countryList,
    typeOfWorkList,
    currencyList,
    requiredDocs,
    isFormReady,
  };
};
