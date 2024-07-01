
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFirewire from "../../src/components/MdiFirewire.vue";

test("MdiFirewire snapshot", () => {
  const wrapper = mount(MdiFirewire, {});
  expect(wrapper.html()).toMatchSnapshot();
});
