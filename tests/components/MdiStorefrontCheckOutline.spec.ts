
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStorefrontCheckOutline from "../../src/components/MdiStorefrontCheckOutline.vue";

test("MdiStorefrontCheckOutline snapshot", () => {
  const wrapper = mount(MdiStorefrontCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
