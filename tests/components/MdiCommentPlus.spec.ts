
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentPlus from "../../src/components/MdiCommentPlus.vue";

test("MdiCommentPlus snapshot", () => {
  const wrapper = mount(MdiCommentPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
