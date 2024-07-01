
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentSearch from "../../src/components/MdiCommentSearch.vue";

test("MdiCommentSearch snapshot", () => {
  const wrapper = mount(MdiCommentSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
