
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarConnected from "../../src/components/MdiCarConnected.vue";

test("MdiCarConnected snapshot", () => {
  const wrapper = mount(MdiCarConnected, {});
  expect(wrapper.html()).toMatchSnapshot();
});
