
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBunkBedOutline from "../../src/components/MdiBunkBedOutline.vue";

test("MdiBunkBedOutline snapshot", () => {
  const wrapper = mount(MdiBunkBedOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
