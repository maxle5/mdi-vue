
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBank from "../../src/components/MdiBank.vue";

test("MdiBank snapshot", () => {
  const wrapper = mount(MdiBank, {});
  expect(wrapper.html()).toMatchSnapshot();
});
