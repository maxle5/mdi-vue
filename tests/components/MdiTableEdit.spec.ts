
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableEdit from "../../src/components/MdiTableEdit.vue";

test("MdiTableEdit snapshot", () => {
  const wrapper = mount(MdiTableEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
