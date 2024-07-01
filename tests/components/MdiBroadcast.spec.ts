
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBroadcast from "../../src/components/MdiBroadcast.vue";

test("MdiBroadcast snapshot", () => {
  const wrapper = mount(MdiBroadcast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
