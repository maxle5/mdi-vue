
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDelimited from "../../src/components/MdiFileDelimited.vue";

test("MdiFileDelimited snapshot", () => {
  const wrapper = mount(MdiFileDelimited, {});
  expect(wrapper.html()).toMatchSnapshot();
});
