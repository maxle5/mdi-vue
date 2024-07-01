
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodSteak from "../../src/components/MdiFoodSteak.vue";

test("MdiFoodSteak snapshot", () => {
  const wrapper = mount(MdiFoodSteak, {});
  expect(wrapper.html()).toMatchSnapshot();
});
