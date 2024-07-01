
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEthernetOff from "../../src/components/MdiEthernetOff.vue";

test("MdiEthernetOff snapshot", () => {
  const wrapper = mount(MdiEthernetOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
