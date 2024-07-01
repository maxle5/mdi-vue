
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowTopLeftBottomRightBold from "../../src/components/MdiArrowTopLeftBottomRightBold.vue";

test("MdiArrowTopLeftBottomRightBold snapshot", () => {
  const wrapper = mount(MdiArrowTopLeftBottomRightBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
