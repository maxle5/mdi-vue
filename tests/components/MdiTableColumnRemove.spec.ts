
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableColumnRemove from "../../src/components/MdiTableColumnRemove.vue";

test("MdiTableColumnRemove snapshot", () => {
  const wrapper = mount(MdiTableColumnRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
