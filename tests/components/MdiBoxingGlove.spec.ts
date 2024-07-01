
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBoxingGlove from "../../src/components/MdiBoxingGlove.vue";

test("MdiBoxingGlove snapshot", () => {
  const wrapper = mount(MdiBoxingGlove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
