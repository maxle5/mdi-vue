
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCoffeeOffOutline from "../../src/components/MdiCoffeeOffOutline.vue";

test("MdiCoffeeOffOutline snapshot", () => {
  const wrapper = mount(MdiCoffeeOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
