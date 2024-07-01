
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountChildOutline from "../../src/components/MdiAccountChildOutline.vue";

test("MdiAccountChildOutline snapshot", () => {
  const wrapper = mount(MdiAccountChildOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
