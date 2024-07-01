
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckNetworkOutline from "../../src/components/MdiCheckNetworkOutline.vue";

test("MdiCheckNetworkOutline snapshot", () => {
  const wrapper = mount(MdiCheckNetworkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
