
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountOutline from "../../src/components/MdiAccountOutline.vue";

test("MdiAccountOutline snapshot", () => {
  const wrapper = mount(MdiAccountOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
