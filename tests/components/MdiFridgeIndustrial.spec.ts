
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFridgeIndustrial from "../../src/components/MdiFridgeIndustrial.vue";

test("MdiFridgeIndustrial snapshot", () => {
  const wrapper = mount(MdiFridgeIndustrial, {});
  expect(wrapper.html()).toMatchSnapshot();
});
