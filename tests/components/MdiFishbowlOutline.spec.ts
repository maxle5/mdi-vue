
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFishbowlOutline from "../../src/components/MdiFishbowlOutline.vue";

test("MdiFishbowlOutline snapshot", () => {
  const wrapper = mount(MdiFishbowlOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
