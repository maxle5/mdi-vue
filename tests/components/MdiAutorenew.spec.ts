
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAutorenew from "../../src/components/MdiAutorenew.vue";

test("MdiAutorenew snapshot", () => {
  const wrapper = mount(MdiAutorenew, {});
  expect(wrapper.html()).toMatchSnapshot();
});
