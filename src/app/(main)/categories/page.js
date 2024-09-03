'use client';

import React, { Fragment, useState } from 'react';
import { Card, Rate, Slider, Radio, Checkbox } from 'antd';
import { Input } from '@/components/shared/input';
import CourseCard from '@/components/ui/cards/CourseCard';
import assets from '../../../assets/asset';
import { Paginations } from '@/components/shared/paginations';

const { Search } = Input;

const CategoriesPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [bundleType, setBundleType] = useState('All');
  const [rating, setRating] = useState(0);
  const [sortBy, setSortBy] = useState('Newest');

  const categories = [
    {
      key: 'bcs',
      label: 'BCS Exam',
      subCategories: [
        { key: '2023', label: '2023 (12)' },
        { key: '2022', label: '2022 (15)' },
        { key: '2021', label: '2021 (12)' },
      ],
    },
    { key: 'bank', label: 'Bank Job' },
    { key: 'admission', label: 'Admission' },
    { key: 'others', label: 'Others' },
  ];

  const products = [
    { id: 1, title: 'Product 1', price: 15000, rating: 4.5, type: 'Paid' },
    { id: 2, title: 'Product 2', price: 20000, rating: 4.0, type: 'Free' },
    { id: 3, title: 'Product 3', price: 18000, rating: 4.8, type: 'Paid' },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    );
  };

  return (
    <div className="page-container flex min-h-screen">
      {/* Custom Sidebar */}
      <div className="w-64 p-4">
        <Input.Text placeholder="Search" />

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Categories</h3>
          {categories.map((category) => (
            <div key={category.key} className="mb-2">
              <Checkbox
                onChange={() => handleCategoryChange(category.key)}
                checked={selectedCategories.includes(category.key)}
              >
                {category.label}
              </Checkbox>
              {category.subCategories && (
                <div className="ml-4">
                  {category.subCategories.map((sub) => (
                    <Checkbox
                      key={sub.key}
                      onChange={() => handleCategoryChange(sub.key)}
                      checked={selectedCategories.includes(sub.key)}
                    >
                      {sub.label}
                    </Checkbox>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Bundle Type</h3>
          <Radio.Group value={bundleType} onChange={(e) => setBundleType(e.target.value)}>
            <Radio value="All">All (514)</Radio>
            <Radio value="Free">Free (12)</Radio>
            <Radio value="Paid">Paid (8)</Radio>
          </Radio.Group>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Ratings</h3>
          {[5, 4, 3, 2, 1].map((star) => (
            <Checkbox key={star} onChange={() => setRating(star)}>
              <Rate disabled defaultValue={star} /> & up
            </Checkbox>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Price</h3>
          <Slider range min={0} max={100000} defaultValue={priceRange} onChange={setPriceRange} />
          <div className="flex justify-between">
            <span>৳ {priceRange[0]}</span>
            <span>৳ {priceRange[1]}</span>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Sort by</h3>
          <Radio.Group value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <Radio value="Rating">Rating</Radio>
            <Radio value="PriceLowToHigh">Price: Low to High</Radio>
            <Radio value="PriceHighToLow">Price: High to Low</Radio>
            <Radio value="Newest">Newest</Radio>
          </Radio.Group>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-4">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(20)].map((product, index) => (
            <Fragment key={index}>
              <CourseCard
                title="All In One - 2023 BCS Preparation Model test Bundle set."
                price="199.00"
                img={assets.course2}
              ></CourseCard>
            </Fragment>
          ))}
        </div>

        <div className="flex justify-end my-8">
          <Paginations.Primary />
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
