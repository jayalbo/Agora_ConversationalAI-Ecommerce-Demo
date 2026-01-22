"use client";

import { useState, useEffect } from "react";
import { ProductImages } from "./ProductImages";
import { ProductReviews } from "./ProductReviews";
import { AIAssistant } from "./AIAssistant";
import { AgoraBranding } from "./AgoraBranding";
import { useCredentials } from "@/hooks/useCredentials";
import { useTheme } from "@/hooks/useTheme";
import SettingsModal from "./SettingsModal";
import { AllCredentials } from "@/lib/types/credentials";

const fetchProduct = async (productId: string) => {
  const res = await fetch(`/api/product?productId=${productId}`);
  return res.json();
};

export function ProductPage() {
  const [product, setProduct] = useState<any>(null);
  const selectedProductId = '1'; // Hardcoded to LuminaSphere Pro
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Credentials management
  const { credentials, isLoading: isLoadingCredentials, saveCredentials } = useCredentials();

  // Theme management
  const { toggleTheme, isDark } = useTheme();

  // Show settings modal on first load if no credentials exist
  useEffect(() => {
    if (!isLoadingCredentials && !credentials) {
      setIsSettingsOpen(true);
    }
  }, [isLoadingCredentials, credentials]);

  // Load selected product
  useEffect(() => {
    setIsLoading(true);
    fetchProduct(selectedProductId)
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [selectedProductId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400 mx-auto mb-4"></div>
          <div className="text-xl font-medium text-gray-700 dark:text-gray-200">Loading product...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <div className="text-xl font-medium text-red-600 dark:text-red-400">Error loading product</div>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Please try again later</p>
        </div>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Agora Branding Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <AgoraBranding variant="header" />
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                E-commerce Demo
              </div>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Open Settings"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Product Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {product.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {product.rating}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                ({product.reviewCount.toLocaleString()} reviews)
              </span>
            </div>
            {product.inStock && (
              <span className="px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 rounded-full text-sm font-semibold border border-emerald-200 dark:border-emerald-700">
                ✓ In Stock
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-baseline gap-4">
            <span className="text-5xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <span className="text-2xl text-gray-400 dark:text-gray-500 line-through">
              ${product.originalPrice}
            </span>
            <span className="px-3 py-1.5 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-sm font-semibold border border-red-200 dark:border-red-700">
              Save {product.discount}%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <ProductImages images={product.images} />

          {/* Product Details */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Product Details</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">
              {product.description}
            </p>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Specifications</h3>
              <dl className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex flex-col sm:flex-row sm:items-start gap-2 pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <dt className="font-semibold text-gray-900 dark:text-white sm:w-48 flex-shrink-0">{key}:</dt>
                    <dd className="text-gray-600 dark:text-gray-400 flex-1">{value as string}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <ProductReviews reviews={product.reviews} rating={product.rating} />

        {/* AI Assistant */}
        <AIAssistant product={product} credentials={credentials} />

        {/* Agora Branding Footer */}
        <div className="mt-12 mb-8">
          <AgoraBranding variant="footer" />
        </div>
      </div>

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onSave={saveCredentials}
        initialCredentials={credentials}
      />
    </div>
  );
}
