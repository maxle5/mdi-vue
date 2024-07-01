
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountMultipleRemove from "../../src/components/MdiAccountMultipleRemove.vue";

test("MdiAccountMultipleRemove snapshot", () => {
  const wrapper = mount(MdiAccountMultipleRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
