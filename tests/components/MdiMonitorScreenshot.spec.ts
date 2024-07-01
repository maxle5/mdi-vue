
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorScreenshot from "../../src/components/MdiMonitorScreenshot.vue";

test("MdiMonitorScreenshot snapshot", () => {
  const wrapper = mount(MdiMonitorScreenshot, {});
  expect(wrapper.html()).toMatchSnapshot();
});
