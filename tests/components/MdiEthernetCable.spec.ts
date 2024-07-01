
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEthernetCable from "../../src/components/MdiEthernetCable.vue";

test("MdiEthernetCable snapshot", () => {
  const wrapper = mount(MdiEthernetCable, {});
  expect(wrapper.html()).toMatchSnapshot();
});
