
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagOutline from "../../src/components/MdiFlagOutline.vue";

test("MdiFlagOutline snapshot", () => {
  const wrapper = mount(MdiFlagOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
