
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStorefrontMinus from "../../src/components/MdiStorefrontMinus.vue";

test("MdiStorefrontMinus snapshot", () => {
  const wrapper = mount(MdiStorefrontMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
