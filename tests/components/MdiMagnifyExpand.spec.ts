
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMagnifyExpand from "../../src/components/MdiMagnifyExpand.vue";

test("MdiMagnifyExpand snapshot", () => {
  const wrapper = mount(MdiMagnifyExpand, {});
  expect(wrapper.html()).toMatchSnapshot();
});
