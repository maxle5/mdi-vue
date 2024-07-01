
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveEdit from "../../src/components/MdiContentSaveEdit.vue";

test("MdiContentSaveEdit snapshot", () => {
  const wrapper = mount(MdiContentSaveEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
