
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGesture from "../../src/components/MdiGesture.vue";

test("MdiGesture snapshot", () => {
  const wrapper = mount(MdiGesture, {});
  expect(wrapper.html()).toMatchSnapshot();
});
