
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowCollapseHorizontal from "../../src/components/MdiArrowCollapseHorizontal.vue";

test("MdiArrowCollapseHorizontal snapshot", () => {
  const wrapper = mount(MdiArrowCollapseHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
