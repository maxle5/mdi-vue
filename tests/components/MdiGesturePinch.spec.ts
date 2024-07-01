
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGesturePinch from "../../src/components/MdiGesturePinch.vue";

test("MdiGesturePinch snapshot", () => {
  const wrapper = mount(MdiGesturePinch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
