
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlayBoxMultipleOutline from "../../src/components/MdiPlayBoxMultipleOutline.vue";

test("MdiPlayBoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiPlayBoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
