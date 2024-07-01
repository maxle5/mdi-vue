
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCoffee from "../../src/components/MdiCoffee.vue";

test("MdiCoffee snapshot", () => {
  const wrapper = mount(MdiCoffee, {});
  expect(wrapper.html()).toMatchSnapshot();
});
