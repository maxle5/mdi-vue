
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorShare from "../../src/components/MdiMonitorShare.vue";

test("MdiMonitorShare snapshot", () => {
  const wrapper = mount(MdiMonitorShare, {});
  expect(wrapper.html()).toMatchSnapshot();
});
