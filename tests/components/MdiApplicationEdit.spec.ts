
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationEdit from "../../src/components/MdiApplicationEdit.vue";

test("MdiApplicationEdit snapshot", () => {
  const wrapper = mount(MdiApplicationEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
