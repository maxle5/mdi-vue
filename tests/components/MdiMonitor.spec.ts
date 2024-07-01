
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitor from "../../src/components/MdiMonitor.vue";

test("MdiMonitor snapshot", () => {
  const wrapper = mount(MdiMonitor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
