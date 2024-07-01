
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHelpNetwork from "../../src/components/MdiHelpNetwork.vue";

test("MdiHelpNetwork snapshot", () => {
  const wrapper = mount(MdiHelpNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
