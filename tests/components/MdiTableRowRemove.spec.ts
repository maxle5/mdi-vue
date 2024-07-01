
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableRowRemove from "../../src/components/MdiTableRowRemove.vue";

test("MdiTableRowRemove snapshot", () => {
  const wrapper = mount(MdiTableRowRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
