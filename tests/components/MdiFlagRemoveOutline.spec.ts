
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagRemoveOutline from "../../src/components/MdiFlagRemoveOutline.vue";

test("MdiFlagRemoveOutline snapshot", () => {
  const wrapper = mount(MdiFlagRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
