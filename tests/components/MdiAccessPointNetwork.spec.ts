
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccessPointNetwork from "../../src/components/MdiAccessPointNetwork.vue";

test("MdiAccessPointNetwork snapshot", () => {
  const wrapper = mount(MdiAccessPointNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
