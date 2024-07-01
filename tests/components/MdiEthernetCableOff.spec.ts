
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEthernetCableOff from "../../src/components/MdiEthernetCableOff.vue";

test("MdiEthernetCableOff snapshot", () => {
  const wrapper = mount(MdiEthernetCableOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
