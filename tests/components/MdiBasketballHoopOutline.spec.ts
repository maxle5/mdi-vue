
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBasketballHoopOutline from "../../src/components/MdiBasketballHoopOutline.vue";

test("MdiBasketballHoopOutline snapshot", () => {
  const wrapper = mount(MdiBasketballHoopOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
