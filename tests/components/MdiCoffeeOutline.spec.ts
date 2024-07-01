
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCoffeeOutline from "../../src/components/MdiCoffeeOutline.vue";

test("MdiCoffeeOutline snapshot", () => {
  const wrapper = mount(MdiCoffeeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
