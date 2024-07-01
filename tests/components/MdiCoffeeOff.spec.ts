
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCoffeeOff from "../../src/components/MdiCoffeeOff.vue";

test("MdiCoffeeOff snapshot", () => {
  const wrapper = mount(MdiCoffeeOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
