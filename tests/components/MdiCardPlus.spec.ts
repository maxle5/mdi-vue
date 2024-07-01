
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardPlus from "../../src/components/MdiCardPlus.vue";

test("MdiCardPlus snapshot", () => {
  const wrapper = mount(MdiCardPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
