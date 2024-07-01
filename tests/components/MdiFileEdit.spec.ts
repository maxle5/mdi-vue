
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileEdit from "../../src/components/MdiFileEdit.vue";

test("MdiFileEdit snapshot", () => {
  const wrapper = mount(MdiFileEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
