
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNetworkOffOutline from "../../src/components/MdiNetworkOffOutline.vue";

test("MdiNetworkOffOutline snapshot", () => {
  const wrapper = mount(MdiNetworkOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
