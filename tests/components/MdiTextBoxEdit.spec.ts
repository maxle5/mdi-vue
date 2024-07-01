
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextBoxEdit from "../../src/components/MdiTextBoxEdit.vue";

test("MdiTextBoxEdit snapshot", () => {
  const wrapper = mount(MdiTextBoxEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
