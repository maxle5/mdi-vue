
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagOffOutline from "../../src/components/MdiFlagOffOutline.vue";

test("MdiFlagOffOutline snapshot", () => {
  const wrapper = mount(MdiFlagOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
