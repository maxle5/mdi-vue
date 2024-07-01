
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagOff from "../../src/components/MdiFlagOff.vue";

test("MdiFlagOff snapshot", () => {
  const wrapper = mount(MdiFlagOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
