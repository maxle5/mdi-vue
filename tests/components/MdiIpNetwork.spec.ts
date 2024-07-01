
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIpNetwork from "../../src/components/MdiIpNetwork.vue";

test("MdiIpNetwork snapshot", () => {
  const wrapper = mount(MdiIpNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
