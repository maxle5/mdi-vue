
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTunnel from "../../src/components/MdiTunnel.vue";

test("MdiTunnel snapshot", () => {
  const wrapper = mount(MdiTunnel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
