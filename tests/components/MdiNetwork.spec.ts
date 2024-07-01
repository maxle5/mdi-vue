
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNetwork from "../../src/components/MdiNetwork.vue";

test("MdiNetwork snapshot", () => {
  const wrapper = mount(MdiNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
