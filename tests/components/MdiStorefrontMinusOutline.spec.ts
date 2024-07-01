
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStorefrontMinusOutline from "../../src/components/MdiStorefrontMinusOutline.vue";

test("MdiStorefrontMinusOutline snapshot", () => {
  const wrapper = mount(MdiStorefrontMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
