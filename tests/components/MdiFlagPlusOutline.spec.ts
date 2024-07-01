
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagPlusOutline from "../../src/components/MdiFlagPlusOutline.vue";

test("MdiFlagPlusOutline snapshot", () => {
  const wrapper = mount(MdiFlagPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
