
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountBoxMultipleOutline from "../../src/components/MdiAccountBoxMultipleOutline.vue";

test("MdiAccountBoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiAccountBoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
