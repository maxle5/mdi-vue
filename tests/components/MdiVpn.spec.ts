
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVpn from "../../src/components/MdiVpn.vue";

test("MdiVpn snapshot", () => {
  const wrapper = mount(MdiVpn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
