
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentFlash from "../../src/components/MdiCommentFlash.vue";

test("MdiCommentFlash snapshot", () => {
  const wrapper = mount(MdiCommentFlash, {});
  expect(wrapper.html()).toMatchSnapshot();
});
