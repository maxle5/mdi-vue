
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountNetworkOff from "../../src/components/MdiAccountNetworkOff.vue";

test("MdiAccountNetworkOff snapshot", () => {
  const wrapper = mount(MdiAccountNetworkOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
