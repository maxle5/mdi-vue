
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderMultiplePlus from "../../src/components/MdiFolderMultiplePlus.vue";

test("MdiFolderMultiplePlus snapshot", () => {
  const wrapper = mount(MdiFolderMultiplePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
