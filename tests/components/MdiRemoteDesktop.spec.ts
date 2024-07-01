
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRemoteDesktop from "../../src/components/MdiRemoteDesktop.vue";

test("MdiRemoteDesktop snapshot", () => {
  const wrapper = mount(MdiRemoteDesktop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
