
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIpNetworkOutline from "../../src/components/MdiIpNetworkOutline.vue";

test("MdiIpNetworkOutline snapshot", () => {
  const wrapper = mount(MdiIpNetworkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
