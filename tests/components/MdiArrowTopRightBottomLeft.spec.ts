
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowTopRightBottomLeft from "../../src/components/MdiArrowTopRightBottomLeft.vue";

test("MdiArrowTopRightBottomLeft snapshot", () => {
  const wrapper = mount(MdiArrowTopRightBottomLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
