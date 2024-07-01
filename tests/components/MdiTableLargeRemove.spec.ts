
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableLargeRemove from "../../src/components/MdiTableLargeRemove.vue";

test("MdiTableLargeRemove snapshot", () => {
  const wrapper = mount(MdiTableLargeRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
