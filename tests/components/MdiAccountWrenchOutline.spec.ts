
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountWrenchOutline from "../../src/components/MdiAccountWrenchOutline.vue";

test("MdiAccountWrenchOutline snapshot", () => {
  const wrapper = mount(MdiAccountWrenchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
