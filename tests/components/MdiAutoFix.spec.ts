
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAutoFix from "../../src/components/MdiAutoFix.vue";

test("MdiAutoFix snapshot", () => {
  const wrapper = mount(MdiAutoFix, {});
  expect(wrapper.html()).toMatchSnapshot();
});
