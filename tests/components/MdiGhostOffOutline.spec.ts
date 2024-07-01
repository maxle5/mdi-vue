
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGhostOffOutline from "../../src/components/MdiGhostOffOutline.vue";

test("MdiGhostOffOutline snapshot", () => {
  const wrapper = mount(MdiGhostOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
