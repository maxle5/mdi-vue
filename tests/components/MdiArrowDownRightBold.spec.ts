
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownRightBold from "../../src/components/MdiArrowDownRightBold.vue";

test("MdiArrowDownRightBold snapshot", () => {
  const wrapper = mount(MdiArrowDownRightBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
