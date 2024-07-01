
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownThinCircleOutline from "../../src/components/MdiArrowDownThinCircleOutline.vue";

test("MdiArrowDownThinCircleOutline snapshot", () => {
  const wrapper = mount(MdiArrowDownThinCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
