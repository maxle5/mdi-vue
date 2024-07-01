
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCoffeeToGoOutline from "../../src/components/MdiCoffeeToGoOutline.vue";

test("MdiCoffeeToGoOutline snapshot", () => {
  const wrapper = mount(MdiCoffeeToGoOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
