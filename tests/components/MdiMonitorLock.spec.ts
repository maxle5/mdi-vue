
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorLock from "../../src/components/MdiMonitorLock.vue";

test("MdiMonitorLock snapshot", () => {
  const wrapper = mount(MdiMonitorLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
