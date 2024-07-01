
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGolfCart from "../../src/components/MdiGolfCart.vue";

test("MdiGolfCart snapshot", () => {
  const wrapper = mount(MdiGolfCart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
