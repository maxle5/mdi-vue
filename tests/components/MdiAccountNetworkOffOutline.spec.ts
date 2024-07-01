
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountNetworkOffOutline from "../../src/components/MdiAccountNetworkOffOutline.vue";

test("MdiAccountNetworkOffOutline snapshot", () => {
  const wrapper = mount(MdiAccountNetworkOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
