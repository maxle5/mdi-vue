
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiServerNetwork from "../../src/components/MdiServerNetwork.vue";

test("MdiServerNetwork snapshot", () => {
  const wrapper = mount(MdiServerNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
