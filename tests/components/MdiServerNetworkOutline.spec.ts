
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiServerNetworkOutline from "../../src/components/MdiServerNetworkOutline.vue";

test("MdiServerNetworkOutline snapshot", () => {
  const wrapper = mount(MdiServerNetworkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
