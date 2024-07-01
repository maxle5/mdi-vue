
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNetworkOff from "../../src/components/MdiNetworkOff.vue";

test("MdiNetworkOff snapshot", () => {
  const wrapper = mount(MdiNetworkOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
