
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFanSpeed3 from "../../src/components/MdiFanSpeed3.vue";

test("MdiFanSpeed3 snapshot", () => {
  const wrapper = mount(MdiFanSpeed3, {});
  expect(wrapper.html()).toMatchSnapshot();
});
