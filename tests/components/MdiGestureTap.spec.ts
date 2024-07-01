
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGestureTap from "../../src/components/MdiGestureTap.vue";

test("MdiGestureTap snapshot", () => {
  const wrapper = mount(MdiGestureTap, {});
  expect(wrapper.html()).toMatchSnapshot();
});
