
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailEdit from "../../src/components/MdiEmailEdit.vue";

test("MdiEmailEdit snapshot", () => {
  const wrapper = mount(MdiEmailEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
