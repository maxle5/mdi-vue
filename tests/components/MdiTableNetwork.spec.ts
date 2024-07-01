
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableNetwork from "../../src/components/MdiTableNetwork.vue";

test("MdiTableNetwork snapshot", () => {
  const wrapper = mount(MdiTableNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
