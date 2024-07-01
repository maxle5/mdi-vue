
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGestureTwoTap from "../../src/components/MdiGestureTwoTap.vue";

test("MdiGestureTwoTap snapshot", () => {
  const wrapper = mount(MdiGestureTwoTap, {});
  expect(wrapper.html()).toMatchSnapshot();
});
