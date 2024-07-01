
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLoupe from "../../src/components/MdiLoupe.vue";

test("MdiLoupe snapshot", () => {
  const wrapper = mount(MdiLoupe, {});
  expect(wrapper.html()).toMatchSnapshot();
});
