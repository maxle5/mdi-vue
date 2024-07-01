
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShark from "../../src/components/MdiShark.vue";

test("MdiShark snapshot", () => {
  const wrapper = mount(MdiShark, {});
  expect(wrapper.html()).toMatchSnapshot();
});
