
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotebookHeart from "../../src/components/MdiNotebookHeart.vue";

test("MdiNotebookHeart snapshot", () => {
  const wrapper = mount(MdiNotebookHeart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
