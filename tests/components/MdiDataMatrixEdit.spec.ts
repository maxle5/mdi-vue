
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDataMatrixEdit from "../../src/components/MdiDataMatrixEdit.vue";

test("MdiDataMatrixEdit snapshot", () => {
  const wrapper = mount(MdiDataMatrixEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
