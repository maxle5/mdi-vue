
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpRightBold from "../../src/components/MdiArrowUpRightBold.vue";

test("MdiArrowUpRightBold snapshot", () => {
  const wrapper = mount(MdiArrowUpRightBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
