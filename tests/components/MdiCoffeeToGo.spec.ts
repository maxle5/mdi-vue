
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCoffeeToGo from "../../src/components/MdiCoffeeToGo.vue";

test("MdiCoffeeToGo snapshot", () => {
  const wrapper = mount(MdiCoffeeToGo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
