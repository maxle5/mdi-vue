
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCollapseAll from "../../src/components/MdiCollapseAll.vue";

test("MdiCollapseAll snapshot", () => {
  const wrapper = mount(MdiCollapseAll, {});
  expect(wrapper.html()).toMatchSnapshot();
});
