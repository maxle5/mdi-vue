
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountMultipleOutline from "../../src/components/MdiAccountMultipleOutline.vue";

test("MdiAccountMultipleOutline snapshot", () => {
  const wrapper = mount(MdiAccountMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
