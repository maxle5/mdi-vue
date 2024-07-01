
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNetworkPos from "../../src/components/MdiNetworkPos.vue";

test("MdiNetworkPos snapshot", () => {
  const wrapper = mount(MdiNetworkPos, {});
  expect(wrapper.html()).toMatchSnapshot();
});
