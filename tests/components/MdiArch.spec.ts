
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArch from "../../src/components/MdiArch.vue";

test("MdiArch snapshot", () => {
  const wrapper = mount(MdiArch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
