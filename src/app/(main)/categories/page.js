// CategoriesPage.js
'use client';
import React, { Fragment, useEffect, useState } from 'react';
import { Button, Input, Pagination } from 'antd';
import { useFilters } from '@/globalHooks/useFilters';
import {
  CheckboxFilter,
  RadioFilter,
  RangeFilter,
  RatingFilter,
} from '@/components/shared/filter-component/FilterComponents';
import { useGetAllData } from '@/globalHooks/useGetAllData';
import { GET_ALL_BUNDLE_API_URL } from '@/helpers/apiUrl';
import { PATH_DETAILS } from '@/helpers/Slugs';
import { useRouter, useSearchParams } from 'next/navigation';
import CourseCard from '@/components/ui/cards/CourseCard';
import api from '@/providers/Api';

const { Search } = Input;

const CategoriesPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  // const { dataList, loadingList, getAllData, totalElements } = useGetAllData(
  //   GET_ALL_BUNDLE_API_URL,
  // );
  const [dataList, setDataList] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [categories, setCategories] = useState([]);
  const [filters, updateFilter, syncUrlWithFilters, resetFilters] = useFilters({
    categories: [],
    // priceRange: [0, 100000],
    bundleType: 'ALL',
    rating: 0,
    sort: 'NEWEST',
    page: 1,
    pageSize: 10,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      // This is a mock implementation. Replace with your actual API call.
      const mockCategories = [
        {
          key: 'bcs',
          label: 'BCS Exam',
          children: [
            { key: 'bcs-2023', label: '2023 (12)' },
            { key: 'bcs-2022', label: '2022 (15)' },
            { key: 'bcs-2021', label: '2021 (12)' },
          ],
        },
        {
          key: 'bank',
          label: 'Bank Job',
          children: [
            { key: 'bank-officer', label: 'Officer (20)' },
            { key: 'bank-cash', label: 'Cash (10)' },
          ],
        },
        {
          key: 'admission',
          label: 'Admission',
          children: [
            { key: 'admission-public', label: 'Public University (30)' },
            { key: 'admission-private', label: 'Private University (25)' },
            { key: 'admission-medical', label: 'Medical College (15)' },
          ],
        },
        { key: 'others', label: 'Others (5)' },
      ];
      setCategories(mockCategories);
    };

    fetchCategories();
  }, []);

  
  // useEffect(() => {
  //   getAllBundle();
  // }, [filters]);

  const bundleTypeOptions = [
    { value: 'ALL', label: 'All (514)' },
    { value: 'FREE', label: 'Free (12)' },
    { value: 'PAID', label: 'Paid (8)' },
  ];

  const sortByOptions = [
    { value: 'Rating', label: 'Rating' },
    { value: 'PRICE_ASC', label: 'Price: Low to High' },
    { value: 'PRICE_DESC', label: 'Price: High to Low' },
    { value: 'NEWEST', label: 'Newest' },
    { value: 'OLDEST', label: 'Oldest' },
  ];

  const handlePageChange = (page, pageSize) => {
    updateFilter('page', page);
    updateFilter('pageSize', pageSize);
  };

  const getAllBundle = () => {
    api.getAllData(
      {
        url: GET_ALL_BUNDLE_API_URL,
        params: {
          page: filters.page - 1,
          pageSize: filters.pageSize,
          sort: filters.sortBy,
          categories: filters.categories.join(','),
          bundleType: filters.bundleType,
          rating: filters.rating,
          // priceRange: filters.priceRange.join(','),
        },
        setLoading: setLoading,
      },
      (res) => {
        setDataList(res.data.content);
        setTotalElements(res.data.totalElements);
      },
    );
  };

  return (
    <div className="page-container flex min-h-screen">
      <div className="w-64 p-4">
        {/* <Search placeholder="Search" className="mb-4" /> */}
        <Button onClick={resetFilters} className="mb-4 w-full">
          Reset Filters
        </Button>
        <CheckboxFilter
          title="Categories"
          options={categories}
          selected={filters.categories}
          onChange={(category) => {
            const newCategories = filters.categories.includes(category)
              ? filters.categories.filter((c) => c !== category)
              : [...filters.categories, category];
            updateFilter('categories', newCategories);
          }}
        />
        <RadioFilter
          title="Bundle Type"
          options={bundleTypeOptions}
          value={filters.bundleType}
          onChange={(value) => updateFilter('bundleType', value)}
        />
        <RatingFilter
          value={filters.rating}
          onChange={(value) => updateFilter('rating', value)}
        />
        {/* <RangeFilter
          title="Price"
          min={0}
          max={100000}
          value={filters.priceRange}
          onChange={(value) => updateFilter('priceRange', value)}
        /> */}
        <RadioFilter
          title="Sort by"
          options={sortByOptions}
          value={filters.sortBy}
          onChange={(value) => updateFilter('sortBy', value)}
        />
      </div>
      <div className="flex-1 p-4">
        <div className="course-card mt-6 grid grid-cols-3 gap-x-6  gap-y-16">
          {dataList?.map((bundle, index) => (
            <Fragment key={index}>
              <CourseCard
                onClick={() => router.push(`${PATH_DETAILS}/${bundle?.id}`)}
                className="cursor-pointer"
                value={bundle}
              />
            </Fragment>
          ))}
        </div>
        <div className="my-4 flex justify-end">
          <Pagination
            defaultCurrent={0}
            current={filters.page}
            pageSize={filters.pageSize}
            total={totalElements} // Replace with actual total count
            onChange={handlePageChange}
            showSizeChanger
            showQuickJumper
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
