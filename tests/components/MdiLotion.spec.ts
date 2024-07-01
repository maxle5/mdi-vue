
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLotion from "../../src/components/MdiLotion.vue";

test("MdiLotion snapshot", () => {
  const wrapper = mount(MdiLotion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
