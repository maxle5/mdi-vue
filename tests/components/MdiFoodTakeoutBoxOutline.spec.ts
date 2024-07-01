
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodTakeoutBoxOutline from "../../src/components/MdiFoodTakeoutBoxOutline.vue";

test("MdiFoodTakeoutBoxOutline snapshot", () => {
  const wrapper = mount(MdiFoodTakeoutBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
