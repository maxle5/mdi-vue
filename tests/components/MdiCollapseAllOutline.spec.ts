
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCollapseAllOutline from "../../src/components/MdiCollapseAllOutline.vue";

test("MdiCollapseAllOutline snapshot", () => {
  const wrapper = mount(MdiCollapseAllOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
