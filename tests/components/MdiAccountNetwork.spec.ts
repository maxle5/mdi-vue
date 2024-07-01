
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountNetwork from "../../src/components/MdiAccountNetwork.vue";

test("MdiAccountNetwork snapshot", () => {
  const wrapper = mount(MdiAccountNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
