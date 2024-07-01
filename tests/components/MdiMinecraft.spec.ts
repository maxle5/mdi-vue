
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMinecraft from "../../src/components/MdiMinecraft.vue";

test("MdiMinecraft snapshot", () => {
  const wrapper = mount(MdiMinecraft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
