
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyedropperRemove from "../../src/components/MdiEyedropperRemove.vue";

test("MdiEyedropperRemove snapshot", () => {
  const wrapper = mount(MdiEyedropperRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
