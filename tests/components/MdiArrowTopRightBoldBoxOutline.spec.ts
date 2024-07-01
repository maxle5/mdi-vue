
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowTopRightBoldBoxOutline from "../../src/components/MdiArrowTopRightBoldBoxOutline.vue";

test("MdiArrowTopRightBoldBoxOutline snapshot", () => {
  const wrapper = mount(MdiArrowTopRightBoldBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
