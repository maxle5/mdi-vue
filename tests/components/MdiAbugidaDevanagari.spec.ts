
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAbugidaDevanagari from "../../src/components/MdiAbugidaDevanagari.vue";

test("MdiAbugidaDevanagari snapshot", () => {
  const wrapper = mount(MdiAbugidaDevanagari, {});
  expect(wrapper.html()).toMatchSnapshot();
});
