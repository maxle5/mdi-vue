
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFerrisWheel from "../../src/components/MdiFerrisWheel.vue";

test("MdiFerrisWheel snapshot", () => {
  const wrapper = mount(MdiFerrisWheel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
