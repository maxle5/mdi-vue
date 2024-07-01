
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNetworkOutline from "../../src/components/MdiNetworkOutline.vue";

test("MdiNetworkOutline snapshot", () => {
  const wrapper = mount(MdiNetworkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
