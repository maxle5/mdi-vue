
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationEditOutline from "../../src/components/MdiApplicationEditOutline.vue";

test("MdiApplicationEditOutline snapshot", () => {
  const wrapper = mount(MdiApplicationEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
