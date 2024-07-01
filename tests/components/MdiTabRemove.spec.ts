
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTabRemove from "../../src/components/MdiTabRemove.vue";

test("MdiTabRemove snapshot", () => {
  const wrapper = mount(MdiTabRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
