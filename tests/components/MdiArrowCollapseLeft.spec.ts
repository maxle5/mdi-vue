
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowCollapseLeft from "../../src/components/MdiArrowCollapseLeft.vue";

test("MdiArrowCollapseLeft snapshot", () => {
  const wrapper = mount(MdiArrowCollapseLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
