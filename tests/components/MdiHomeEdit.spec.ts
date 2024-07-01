
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeEdit from "../../src/components/MdiHomeEdit.vue";

test("MdiHomeEdit snapshot", () => {
  const wrapper = mount(MdiHomeEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
