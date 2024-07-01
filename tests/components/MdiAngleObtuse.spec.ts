
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAngleObtuse from "../../src/components/MdiAngleObtuse.vue";

test("MdiAngleObtuse snapshot", () => {
  const wrapper = mount(MdiAngleObtuse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
