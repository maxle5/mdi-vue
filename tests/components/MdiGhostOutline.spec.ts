
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGhostOutline from "../../src/components/MdiGhostOutline.vue";

test("MdiGhostOutline snapshot", () => {
  const wrapper = mount(MdiGhostOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
