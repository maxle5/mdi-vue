
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFitToPageOutline from "../../src/components/MdiFitToPageOutline.vue";

test("MdiFitToPageOutline snapshot", () => {
  const wrapper = mount(MdiFitToPageOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
