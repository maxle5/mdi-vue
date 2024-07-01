
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoMinusOutline from "../../src/components/MdiVideoMinusOutline.vue";

test("MdiVideoMinusOutline snapshot", () => {
  const wrapper = mount(MdiVideoMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
