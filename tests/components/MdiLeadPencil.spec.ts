
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLeadPencil from "../../src/components/MdiLeadPencil.vue";

test("MdiLeadPencil snapshot", () => {
  const wrapper = mount(MdiLeadPencil, {});
  expect(wrapper.html()).toMatchSnapshot();
});
