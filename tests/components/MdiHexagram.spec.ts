
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHexagram from "../../src/components/MdiHexagram.vue";

test("MdiHexagram snapshot", () => {
  const wrapper = mount(MdiHexagram, {});
  expect(wrapper.html()).toMatchSnapshot();
});
