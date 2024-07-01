
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloseNetworkOutline from "../../src/components/MdiCloseNetworkOutline.vue";

test("MdiCloseNetworkOutline snapshot", () => {
  const wrapper = mount(MdiCloseNetworkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
