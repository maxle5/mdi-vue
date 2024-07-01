
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageEdit from "../../src/components/MdiImageEdit.vue";

test("MdiImageEdit snapshot", () => {
  const wrapper = mount(MdiImageEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
