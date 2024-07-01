
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldEdit from "../../src/components/MdiShieldEdit.vue";

test("MdiShieldEdit snapshot", () => {
  const wrapper = mount(MdiShieldEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
