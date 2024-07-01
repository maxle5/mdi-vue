
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodTakeoutBox from "../../src/components/MdiFoodTakeoutBox.vue";

test("MdiFoodTakeoutBox snapshot", () => {
  const wrapper = mount(MdiFoodTakeoutBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
