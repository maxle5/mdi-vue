
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightBoldOutline from "../../src/components/MdiArrowRightBoldOutline.vue";

test("MdiArrowRightBoldOutline snapshot", () => {
  const wrapper = mount(MdiArrowRightBoldOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
