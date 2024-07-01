
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentEdit from "../../src/components/MdiCommentEdit.vue";

test("MdiCommentEdit snapshot", () => {
  const wrapper = mount(MdiCommentEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
