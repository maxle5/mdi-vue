
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowTopRightBoldOutline from "../../src/components/MdiArrowTopRightBoldOutline.vue";

test("MdiArrowTopRightBoldOutline snapshot", () => {
  const wrapper = mount(MdiArrowTopRightBoldOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
