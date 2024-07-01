
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOctagramEdit from "../../src/components/MdiOctagramEdit.vue";

test("MdiOctagramEdit snapshot", () => {
  const wrapper = mount(MdiOctagramEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
