
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBucketOutline from "../../src/components/MdiBucketOutline.vue";

test("MdiBucketOutline snapshot", () => {
  const wrapper = mount(MdiBucketOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
