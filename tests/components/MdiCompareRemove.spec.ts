
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCompareRemove from "../../src/components/MdiCompareRemove.vue";

test("MdiCompareRemove snapshot", () => {
  const wrapper = mount(MdiCompareRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
