
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowCollapseAll from "../../src/components/MdiArrowCollapseAll.vue";

test("MdiArrowCollapseAll snapshot", () => {
  const wrapper = mount(MdiArrowCollapseAll, {});
  expect(wrapper.html()).toMatchSnapshot();
});
