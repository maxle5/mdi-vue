
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNavigationVariantOutline from "../../src/components/MdiNavigationVariantOutline.vue";

test("MdiNavigationVariantOutline snapshot", () => {
  const wrapper = mount(MdiNavigationVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
