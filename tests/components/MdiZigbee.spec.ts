
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiZigbee from "../../src/components/MdiZigbee.vue";

test("MdiZigbee snapshot", () => {
  const wrapper = mount(MdiZigbee, {});
  expect(wrapper.html()).toMatchSnapshot();
});
