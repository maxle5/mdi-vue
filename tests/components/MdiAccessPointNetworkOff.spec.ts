
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccessPointNetworkOff from "../../src/components/MdiAccessPointNetworkOff.vue";

test("MdiAccessPointNetworkOff snapshot", () => {
  const wrapper = mount(MdiAccessPointNetworkOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
