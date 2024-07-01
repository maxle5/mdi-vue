
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailOpen from "../../src/components/MdiEmailOpen.vue";

test("MdiEmailOpen snapshot", () => {
  const wrapper = mount(MdiEmailOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
