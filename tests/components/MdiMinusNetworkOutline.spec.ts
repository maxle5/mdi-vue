
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMinusNetworkOutline from "../../src/components/MdiMinusNetworkOutline.vue";

test("MdiMinusNetworkOutline snapshot", () => {
  const wrapper = mount(MdiMinusNetworkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
