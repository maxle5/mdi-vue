
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentEye from "../../src/components/MdiCommentEye.vue";

test("MdiCommentEye snapshot", () => {
  const wrapper = mount(MdiCommentEye, {});
  expect(wrapper.html()).toMatchSnapshot();
});
