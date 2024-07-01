
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiServerNetworkOff from "../../src/components/MdiServerNetworkOff.vue";

test("MdiServerNetworkOff snapshot", () => {
  const wrapper = mount(MdiServerNetworkOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
