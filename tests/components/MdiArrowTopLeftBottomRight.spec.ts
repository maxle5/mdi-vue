
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowTopLeftBottomRight from "../../src/components/MdiArrowTopLeftBottomRight.vue";

test("MdiArrowTopLeftBottomRight snapshot", () => {
  const wrapper = mount(MdiArrowTopLeftBottomRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
