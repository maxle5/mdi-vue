
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBroadcastOff from "../../src/components/MdiBroadcastOff.vue";

test("MdiBroadcastOff snapshot", () => {
  const wrapper = mount(MdiBroadcastOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
