
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBasketballHoop from "../../src/components/MdiBasketballHoop.vue";

test("MdiBasketballHoop snapshot", () => {
  const wrapper = mount(MdiBasketballHoop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
