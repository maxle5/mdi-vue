
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewHeadline from "../../src/components/MdiViewHeadline.vue";

test("MdiViewHeadline snapshot", () => {
  const wrapper = mount(MdiViewHeadline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
