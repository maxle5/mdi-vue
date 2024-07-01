
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountNetworkOutline from "../../src/components/MdiAccountNetworkOutline.vue";

test("MdiAccountNetworkOutline snapshot", () => {
  const wrapper = mount(MdiAccountNetworkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
