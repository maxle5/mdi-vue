
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTunnelOutline from "../../src/components/MdiTunnelOutline.vue";

test("MdiTunnelOutline snapshot", () => {
  const wrapper = mount(MdiTunnelOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
