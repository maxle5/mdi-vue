
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlpha from "../../src/components/MdiAlpha.vue";

test("MdiAlpha snapshot", () => {
  const wrapper = mount(MdiAlpha, {});
  expect(wrapper.html()).toMatchSnapshot();
});
