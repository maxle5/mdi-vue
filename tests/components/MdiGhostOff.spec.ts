
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGhostOff from "../../src/components/MdiGhostOff.vue";

test("MdiGhostOff snapshot", () => {
  const wrapper = mount(MdiGhostOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
