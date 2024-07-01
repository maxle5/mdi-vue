
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlusNetworkOutline from "../../src/components/MdiPlusNetworkOutline.vue";

test("MdiPlusNetworkOutline snapshot", () => {
  const wrapper = mount(MdiPlusNetworkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
