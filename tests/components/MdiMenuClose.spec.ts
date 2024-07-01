
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMenuClose from "../../src/components/MdiMenuClose.vue";

test("MdiMenuClose snapshot", () => {
  const wrapper = mount(MdiMenuClose, {});
  expect(wrapper.html()).toMatchSnapshot();
});
