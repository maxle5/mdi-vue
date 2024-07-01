
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBikePedalMountain from "../../src/components/MdiBikePedalMountain.vue";

test("MdiBikePedalMountain snapshot", () => {
  const wrapper = mount(MdiBikePedalMountain, {});
  expect(wrapper.html()).toMatchSnapshot();
});
