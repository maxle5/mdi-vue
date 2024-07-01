
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHammer from "../../src/components/MdiHammer.vue";

test("MdiHammer snapshot", () => {
  const wrapper = mount(MdiHammer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
