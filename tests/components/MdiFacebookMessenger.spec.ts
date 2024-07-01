
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFacebookMessenger from "../../src/components/MdiFacebookMessenger.vue";

test("MdiFacebookMessenger snapshot", () => {
  const wrapper = mount(MdiFacebookMessenger, {});
  expect(wrapper.html()).toMatchSnapshot();
});
