
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTapeDrive from "../../src/components/MdiTapeDrive.vue";

test("MdiTapeDrive snapshot", () => {
  const wrapper = mount(MdiTapeDrive, {});
  expect(wrapper.html()).toMatchSnapshot();
});
