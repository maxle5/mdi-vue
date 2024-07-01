
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHook from "../../src/components/MdiHook.vue";

test("MdiHook snapshot", () => {
  const wrapper = mount(MdiHook, {});
  expect(wrapper.html()).toMatchSnapshot();
});
